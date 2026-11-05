// Dados públicos do app da Web no Firebase. Não são senha: vão para o navegador de todo visitante.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAmkT-5zkpzfvjdxSyRgP-6KzLBWrjx4iw",
  authDomain: "portfolio-sophia.firebaseapp.com",
  projectId: "portfolio-sophia",
  storageBucket: "portfolio-sophia.firebasestorage.app",
  messagingSenderId: "13956656561",
  appId: "1:13956656561:web:f81e96fe61c084c9db2190",
  measurementId: "G-SE12LQNZJ1",
};

const SITE_HOSTNAME = "sophiadossantos.com";

let started = false;

/** Carrega o Analytics só depois do aceite e só no site publicado. */
export async function startAnalytics() {
  const { hostname } = window.location;
  const isProductionSite = hostname === SITE_HOSTNAME || hostname === `www.${SITE_HOSTNAME}`;
  if (started || !isProductionSite) return;
  started = true;

  const [{ initializeApp }, { getAnalytics, isSupported }] = await Promise.all([
    import("@firebase/app"),
    import("@firebase/analytics"),
  ]);

  if (await isSupported()) getAnalytics(initializeApp(FIREBASE_CONFIG));
}
