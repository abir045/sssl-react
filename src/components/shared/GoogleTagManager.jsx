// import Script from "next/script";

// export default function GoogleTagManager() {
//   return (
//     <>
//       <Script
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=AW-11361147454"
//       />

//       <Script id="google-tag-manager">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'AW-11361147454');
//         `}
//       </Script>
//     </>
//   );
// }

import { useEffect } from "react";

export default function GoogleTagManager() {
  useEffect(() => {
    // Load external GTM script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11361147454";
    document.head.appendChild(script);

    // Inject inline script
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11361147454');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}
