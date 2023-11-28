/* ~/plugins/google-analytics.js */

export default ({ app }) => {
  /*
    Se asegura de que el código solo se ejecute en el lado del cliente y solo
    una vez cuando el sitio se carga.
  */
  if (process.client) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-QTC3G6D1CL');

    // Carga asíncrona del script de Google Analytics
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QTC3G6D1CL';
    document.head.appendChild(script);
  }
}
