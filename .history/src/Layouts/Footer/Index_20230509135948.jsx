import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer>
  <div class="footer-top">
    <div class="footer-logo">
      <img src="logo.png" alt="Logo" />
      <p>© 2023 Naoplay. Tous droits réservés.</p>
    </div>
    <div class="footer-menu">
      <h3>Menu</h3>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">À propos</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <h3>Suivez-nous</h3>
      <ul>
        <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="/"><i class="fab fa-twitter"></i></a></li>
        <li><a href="/"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="/"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h3>Contactez-nous</h3>
      <ul>
        <li><i class="fas fa-phone"></i> +33 123 456 789</li>
        <li><i class="fas fa-envelope"></i> contact@naoplay.fr</li>
        <li><i class="fas fa-map-marker-alt"></i> 123 Rue de la Victoire, Paris</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Politique de confidentialité | Mentions légales</p>
  </div>
</footer>

  );
}

export default Footer;
