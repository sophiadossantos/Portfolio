// Gera versões WebP das imagens de src/assets e o manifesto usado por ResponsiveImage.
// Uso: npm run images
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = "src/assets";
const OUTPUT_DIR = path.join(ASSETS_DIR, "optimized");
const WIDTHS = [400, 800];
const MAX_WIDTH = 1600;
const QUALITY = 80;

const slugify = (name) =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return fullPath === OUTPUT_DIR ? [] : findImages(fullPath);
      }
      return /\.(png|jpe?g)$/i.test(entry.name) ? [fullPath] : [];
    }),
  );
  return results.flat();
}

async function toWebp(source, target, width) {
  return sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
}

await fs.rm(OUTPUT_DIR, { recursive: true, force: true });

const imports = [];
const entries = [];
const sources = (await findImages(ASSETS_DIR)).sort();

for (const [index, source] of sources.entries()) {
  const relativeDir = path.relative(ASSETS_DIR, path.dirname(source));
  const slug = slugify(path.parse(source).name);
  await fs.mkdir(path.join(OUTPUT_DIR, relativeDir), { recursive: true });

  const toImportPath = (file) =>
    `./${path.posix.join(relativeDir.split(path.sep).join("/"), file)}`;

  const largeFile = `${slug}-large.webp`;
  const large = await toWebp(
    source,
    path.join(OUTPUT_DIR, relativeDir, largeFile),
    MAX_WIDTH,
  );

  const largeName = `image${index}Large`;
  imports.push(`import ${largeName} from "${toImportPath(largeFile)}";`);

  const srcSet = [];
  for (const width of WIDTHS.filter((value) => value < large.width)) {
    const file = `${slug}-${width}.webp`;
    await toWebp(source, path.join(OUTPUT_DIR, relativeDir, file), width);
    const name = `image${index}W${width}`;
    imports.push(`import ${name} from "${toImportPath(file)}";`);
    srcSet.push(`\${${name}} ${width}w`);
  }
  srcSet.push(`\${${largeName}} ${large.width}w`);

  entries.push(
    `  [${largeName}]: { srcSet: \`${srcSet.join(", ")}\`, width: ${large.width}, height: ${large.height} },`,
  );
}

const manifest = `// Gerado por scripts/optimize-images.mjs. Não edite à mão.
${imports.join("\n")}

export type ImageMeta = { srcSet: string; width: number; height: number };

export const imageMeta: Record<string, ImageMeta> = {
${entries.join("\n")}
};
`;

await fs.writeFile(path.join(OUTPUT_DIR, "manifest.ts"), manifest);
console.log(`${sources.length} imagens otimizadas em ${OUTPUT_DIR}`);
