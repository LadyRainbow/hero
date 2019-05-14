<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>
<footer class="footer">
    <div class="footer-top">
        <p class="footer-logo-text">БОГАТЫРЪ</p>
        <div class="logo-img-wrp">
            <img src="http://xn--80abg7bml1dg.xn--p1ai/wp-content/uploads/2018/12/logo-big.png" alt="logo" class="footer-logo-img">
        </div>
        <ul class="soc-accs-wrp">
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-vk"></i></a></li>
        </ul>
    </div>
    <div class="footer-bottom">
        <p>© 2018 Богатыръ</p>
        <a href="/policy">Политика конфиденциальности</a>
    </div>
</footer>

<?php wp_footer(); ?>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
<link rel="stylesheet" href="<?= bloginfo('build'); ?>/css/bootstrap.css">
<link rel="stylesheet" href="<?= bloginfo('build'); ?>/css/swiper.css">
<link rel="stylesheet" href="<?= bloginfo('build'); ?>/css/jquery.mCustomScrollbar.css">
<link rel="stylesheet" href="<?= bloginfo('build'); ?>/css/selectize.css">
<link rel="stylesheet" type="text/css" href="<?= bloginfo('build'); ?>css/style.css">


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://unpkg.com/vh-check/dist/vh-check.min.js"></script>

<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>

<script src="<?= bloginfo('build'); ?>/js/splittext.min.js"></script>
<script src="<?= bloginfo('build'); ?>/js/bootstrap.min.js"></script>
<script src="<?= bloginfo('build'); ?>/libs/jquery.maskedinput.min.js"></script>
<script src="<?= bloginfo('build'); ?>/js/selectize.min.js"></script>
<script src="<?= bloginfo('build'); ?>/js/selectize.js"></script>
<script src="<?= bloginfo('build'); ?>/js/jquery.mCustomScrollbar.min.js"></script>
<script src="<?= bloginfo('build'); ?>/js/index.js"></script>

</body>
</html>
