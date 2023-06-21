<?php get_header(); ?>

<body>

    <?php get_footer(); ?>

    <div id="fullpage">
        <div class="section">
            <div class="main">
                <div class="wrapper-column">
                    <div class="boxes">
                        <div id="whiteBlock">
                            Najlepsze pomysły na Święta <b>  od Spider's Web</b>
                        </div>
                        <div id="brownBlock1">
                            <div id="text1">Poradnik</div>
                        </div>
                        <div id="brownBlock2">
                            <div id="text2">Świąteczny</div>
                        </div>
                        <div id="blackBlock">
                            <div class="text-black">2023</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="wrapper-row">
                <div class="light-brown-block">
                    <div class="brown-block joanna-block">
                        <div class="text-1">
                            <?php echo esc_html( get_field('imie1') ); ?>
                        </div>
                    </div>
                    <div class="page-count">
                        <div class="text-big">
                            01
                        </div>
                        <div class="text-small">
                            / 05
                        </div>
                    </div>
                    <div class="white-box">
                        <div class="text-2">
                            ZOBACZ PROPOZYCJE
                        </div>
                    </div>
                </div>
                <div class="picture jt">
                </div>
            </div>
        </div>

        <div class="section">
            <div class="wrapper-row">
                <div class="light-brown-block">
                    <div class="brown-block dawid-block">
                        <div class="text-1">
                            <?php echo esc_html( get_field('imie2') ); ?>
                        </div>
                    </div>
                    <div class="page-count">
                        <div class="text-big">
                            02
                        </div>
                        <div class="text-small">
                            / 05
                        </div>
                    </div>
                    <div class="white-box">
                        <div class="text-2">
                            ZOBACZ PROPOZYCJE
                        </div>
                    </div>
                </div>
                <div class="picture dk">
                </div>
            </div>
        </div>

        <div class="section">
            <div class="wrapper-row">
                <div class="light-brown-block">
                    <div class="brown-block piotr-block">
                        <div class="text-1">
                            <?php echo esc_html( get_field('imie3') ); ?>
                        </div>
                    </div>
                    <div class="page-count">
                        <div class="text-big">
                            03
                        </div>
                        <div class="text-small">
                            / 05
                        </div>
                    </div>
                    <div class="white-box">
                        <div class="text-2">
                            ZOBACZ PROPOZYCJE
                        </div>
                    </div>
                </div>
                <div class="picture pg">
                </div>
            </div>
        </div>

        <div class="section">
            <div class="wrapper-row">
                <div class="light-brown-block">
                    <div class="brown-block maciej-block">
                        <div class="text-1">
                            <?php echo esc_html( get_field('imie4') ); ?>
                        </div>
                    </div>
                    <div class="page-count">
                        <div class="text-big">
                            04
                        </div>
                        <div class="text-small">
                            / 05
                        </div>
                    </div>
                    <div class="white-box">
                        <div class="text-2">
                            ZOBACZ PROPOZYCJE
                        </div>
                    </div>
                </div>
                <div class="picture mg">
                </div>
            </div>
        </div>
    </div>
    <script src="./wp-content/themes/poradnik/node_modules\fullpage.js\dist\fullpage.js"></script>
    <script src="./wp-content/themes/poradnik/js/scripts.js"></script>
</body>

</html>