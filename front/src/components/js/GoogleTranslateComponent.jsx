import React, { useState, useEffect } from "react";

const GoogleTranslateComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Função para carregar o script do Google Translate
  const loadGoogleTranslateScript = () => {
    if (window.google && window.google.translate) {
      setIsLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        setIsLoaded(true); // Marca como carregado quando o script for carregado
      };
    }
  };

  // Função de inicialização do Google Translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "pt", // Idioma original
        includedLanguages: "pt,en,es", // Idiomas disponíveis
        layout: window.google.translate.TranslateElement,
      },
      "google_translate_element"
    );
  };

  // Carrega o script apenas uma vez quando o componente for montado
  useEffect(() => {
    loadGoogleTranslateScript();
  }, []);

  // Quando o script estiver carregado, inicialize o Google Translate
  useEffect(() => {
    if (isLoaded) {
      googleTranslateElementInit();
    }
  }, [isLoaded]);

  return (
<div>
  {/* Div onde o tradutor do Google será inserido */}
  <div id="google_translate_element"></div>
</div>

  );
};

export default GoogleTranslateComponent;
