(function () {
    const Bahasa = {
        "indonesia": {
            judul1: "Pabrik Terkemuka di Dunia",
            judul2: "SATU PABRIK UNTUK SEMUA SOLUSI",
            dex1n1: "Apa itu Cetakan Karet?",
            dex1n2: "Pencetakan karet adalah proses mengubah karet yang tidak diawetkan atau elastomer menjadi produk yang dapat digunakan dengan memindahkan, mengompresi, atau menyuntikkan bahan karet mentah ke dalam rongga cetakan logam. Tekanan yang diberikan dengan adanya panas menciptakan reaksi kimia, seperti pengawetan atau vulkanisasi, yang menyebabkan rantai polimer dalam material berikatan silang.",
            dex2n1: "Kami adalah pabrik rubber moulding, solusi bagi industri yang membutuhkan komponen karet untuk dicetak",
            dex2n2: "Dengan pengalaman bertahun-tahun dalam industri ini, kami telah menjadi mitra yang terpercaya bagi perusahaan-perusahaan dalam sektor otomotif, elektronik, peralatan industri, dan banyak industri lainnya. Kami berkomitmen untuk memberikan produk karet yang inovatif dan presisi tinggi untuk memenuhi standar ketat setiap klien kami.",
            dex2n3: "Ketika Anda bekerja dengan kami, Anda akan mendapatkan akses ke tim ahli yang berpengalaman dalam desain mold karet, bahan karet pilihan, dan teknologi produksi terkini. Kami memahami betul bahwa setiap proyek memiliki kebutuhan yang unik, itulah sebabnya kami siap untuk berkolaborasi dengan Anda dalam setiap tahap produksi. Dari konsep awal hingga pengiriman produk akhir, kami memberikan layanan yang komprehensif dan berkualitas tinggi.",
            Home: "Beranda",
            About: "Tentang",
            Products: "Produk",
            Contact: "Kontak"
        },
        "english": {
            judul1: "World's Leading Factory",
            judul2: "ONE FACTORY FOR ALL SOLUTIONS",
            dex1n1: "What is Rubber Molding?",
            dex1n2: "Rubber molding is the process of converting uncured rubber or elastomers into usable products by moving, compressing, or injecting raw rubber material into a metal mold cavity. The pressure exerted in the presence of heat creates a chemical reaction, such as curing or vulcanization, which causes the polymer chains in the material to crosslink.",
            dex2n1: "We are a rubber molding factory, a solution for industries that need rubber components to be molded.",
            dex2n2: "With years of experience in the industry, we have become a trusted partner for companies in the automotive, electronics, industrial equipment, and many other industries. We are committed to delivering innovative and high-precision rubber products to meet the stringent standards of each of our clients.",
            dex2n3: "When you work with us, you'll get access to a team of experts who are well-versed in rubber mold design, preferred rubber materials, and the latest production technologies. We understand that every project has unique needs, which is why we are ready to collaborate with you at every stage of production. From the initial concept to the final product delivery, we provide comprehensive and high-quality services.",
            Home: "Home",
            About: "About",
            Products: "Products",
            Contact: "Contact"
        },
    }

    let lang = "english";

    const save = () => {
        window.localStorage.setItem("lang", JSON.stringify({
            lang: lang
        }));
    }

    const find = () => {
        try {
            const memori = window.localStorage.getItem("lang");
            return memori ? JSON.parse(memori) : null;
        } catch {
            return null;
        }
    }

    const load = () => {
        const memori = find();
        if (memori) lang = memori.lang;
    }

    const temukanBahasa = find();
    if (temukanBahasa) load();

    const tampilkanBahasa = (lang) => {
        const contentBefore = document.querySelector(".container");
        if (contentBefore) contentBefore.remove();

        let hasil = Bahasa[lang];

        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = (`
            

        <header
            class="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
            id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead">
            <div id="ast-desktop-header" data-toggle-type="dropdown">
                <div class="ast-main-header-wrap main-header-bar-wrap ">
                    <div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item"
                        data-section="section-primary-header-builder">
                        <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container"
                            data-section="section-primary-header-builder">
                            <div
                                class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                                <div
                                    class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                    <div class="ast-builder-layout-element ast-flex site-header-focus-item"
                                        data-section="title_tagline">
                                        <div class="site-branding ast-site-identity"
                                            itemtype="https://schema.org/Organization" itemscope="itemscope">
                                            <span class="site-logo-img"><a
                                                    href="https://websitedemos.net/sierra-industry-02/"
                                                    class="custom-logo-link transparent-custom-logo" rel="home"
                                                    itemprop="url" aria-label="Sierra Industry">

                                                    <img width="80" src="img/logopt.png" class="custom-logo" alt
                                                        decoding="async" loading="lazy" srcset /></a></span>
                                        </div>

                                    </div>
                                </div>
                                <div
                                    class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                    <div class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item"
                                        data-section="section-hb-menu-1">
                                        <div class="ast-main-header-bar-alignment">
                                            <div class="main-header-bar-navigation">
                                                <nav class="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item"
                                                    id="primary-site-navigation-desktop" aria-label="Site Navigation"
                                                    itemtype="https://schema.org/SiteNavigationElement"
                                                    itemscope="itemscope">
                                                    <div class="main-navigation ast-inline-flex">
                                                        <ul id="ast-hf-menu-1"
                                                            class="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile">
                                                            <li id="menu-item-15"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-15">
                                                                <a href="/index.html"
                                                                    aria-current="page" class="menu-link">${hasil.Home}</a>
                                                            </li>
                                                            <li id="menu-item-14"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
                                                                <a href="/about.html"
                                                                    class="menu-link">${hasil.About}</a></li>
                                                            <li id="menu-item-13"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13">
                                                                <a href="/product.html"
                                                                    class="menu-link">${hasil.Products}</a></li>
                                                            <li id="menu-item-11"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
                                                                <a href="/contact.html"
                                                                    class="menu-link">${hasil.Contact}</a></li>   
                                                            <li id="menu-item-11"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
                                                                
                                                                <select id="language-select" style="font-size: 16px; padding: 5px; border: 1px solid #ccc;">
                                                                <option value="indonesia">Indonesia</option>
                                                                <option value="english">English</option>
                                                                </select>

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ast-desktop-header-content content-align-flex-start ">
                </div>
            </div>
        </header>

        
            <header class="site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead">
                <div id="ast-mobile-header" class="ast-mobile-header-wrap" data-type="dropdown">
                    <div class="ast-main-header-wrap main-header-bar-wrap">
                        <div class="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-primary-header-builder">
                            <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                                <div class="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                    <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                                        <div class="site-branding ast-site-identity" itemtype="https://schema.org/Organization" itemscope="itemscope">
                                            <span class="site-logo-img"><a href="/index.html" class="custom-logo-link transparent-custom-logo" rel="home" itemprop="url" aria-label="Sierra Industry">
                                                <img width="80" src="img/logopt.png" class="custom-logo" alt="Sierra Industry Logo" decoding="async" loading="lazy" srcset="">
                                            </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                    <div>
                                        <select id="language-select2" style="font-size: 16px; padding: 5px; border: 1px solid #ccc;">
                                            <option value="indonesia">Indonesia</option>
                                            <option value="english">English</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            

            <header  class=" site-header header-main-layout-1 ast-primary-menu-enabled ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" itemtype="https://schema.org/WPHeader" itemscope="itemscope" itemid="#masthead">
                <div id="ast-mobile-header" class="ast-mobile-header-wrap" data-type="dropdown" >
                    <div class="ast-main-header-wrap main-header-bar-wrap">
                        <div class="link-container" style="margin-top: 80px ;">
                        <a href="/index.html"><img src="/img/home.png" alt="home" width="40"></a>
                        <a href="/about.html"><img src="/img/about.png" alt="home" width="40"></a>
                        <a href="/product.html"><img src="/img/products.png" alt="home" width="40"></a>
                        <a href="/contact.html"><img src="/img/contact.png" alt="home" width="40"></a>
                    </div>
                    </div>
                </div>
            </header>
        
        
        <div id="content" class="site-content">
            <div class="ast-container">
                <div id="primary" class="content-area primary">
                    <main id="main" class="site-main">
                        <article class="post-6 page type-page status-publish ast-article-single" id="post-6"
                            itemtype="https://schema.org/CreativeWork" itemscope="itemscope">
                            <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                            </header>
                            <div class="entry-content clear" itemprop="text">
                                <div data-elementor-type="wp-page" data-elementor-id="6"
                                    class="elementor elementor-6">
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-5ec671b7 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="5ec671b7" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1ba84b9d"
                                                data-id="1ba84b9d" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-660e715a elementor-widget elementor-widget-heading"
                                                        data-id="660e715a" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h5 class="elementor-heading-title elementor-size-default">
                                                            ${hasil.judul1}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-63360b64 elementor-widget elementor-widget-heading"
                                                        data-id="63360b64" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h1 class="elementor-heading-title elementor-size-default">
                                                            ${hasil.judul2}</h1>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-660e715a elementor-widget elementor-widget-heading"
                                                        data-id="660e715a" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h5 class="elementor-heading-title elementor-size-default">
                                                                PT.MARINDO MITRA MANDIRI
                                                            </h5>
                                                        </div>
                                                    <div class="elementor-element elementor-element-2876fe13 elementor-view-default elementor-widget elementor-widget-icon"
                                                        data-id="2876fe13" data-element_type="widget"
                                                        data-widget_type="icon.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-icon-wrapper">
                                                                <div class="elementor-icon">
                                                                    <i aria-hidden="true"
                                                                        class="fas fa-long-arrow-alt-down"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-3f506a9d elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="3f506a9d" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-74aefa7f"
                                                data-id="74aefa7f" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">

                                                    <div class="elementor-element elementor-element-f8276d7 elementor-widget elementor-widget-heading"
                                                        data-id="f8276d7" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                            ${hasil.dex1n1}</h2>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-a26f254 elementor-widget elementor-widget-text-editor"
                                                        data-id="a26f254" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>
                                                            ${hasil.dex1n2}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-137f881d elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="137f881d" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1406fbfa"
                                                data-id="1406fbfa" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    
                                                    <div class="elementor-element elementor-element-aa3fba9 elementor-widget elementor-widget-heading"
                                                        data-id="aa3fba9" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h3 class="elementor-heading-title elementor-size-default">
                                                            ${hasil.dex2n1}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-c5f3c2b elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                        data-id="c5f3c2b" data-element_type="widget"
                                                        data-widget_type="divider.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-divider">
                                                                <span class="elementor-divider-separator">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-6250654 elementor-widget elementor-widget-heading"
                                                        data-id="6250654" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <hp class="elementor-heading-title elementor-size-default">
                                                            ${hasil.dex2n2}
                                                            </hp>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-b518706 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                        data-id="b518706" data-element_type="widget"
                                                        data-widget_type="divider.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-divider">
                                                                <span class="elementor-divider-separator">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-5487e73 elementor-widget elementor-widget-heading"
                                                        data-id="5487e73" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <p class="elementor-heading-title elementor-size-default">
                                                            ${hasil.dex2n3}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-34855c2"
                                                data-id="34855c2" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-117e42d elementor-widget elementor-widget-heading"
                                                        data-id="117e42d" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                            <img src="/img/logopt.png" alt="" >
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </article>



                    </main>
                </div>
            </div>
        </div>


        `);

        document.getElementById('language-container').appendChild(container);

        const select1 = document.getElementById('language-select');
        select1.value = lang;
        select1.addEventListener('change', function () {
            lang = this.value;
            tampilkanBahasa(lang);
            save();
        });

        const select2 = document.getElementById('language-select2');
        select2.value = lang;
        select2.addEventListener('change', function () {
            lang = this.value;
            tampilkanBahasa(lang);
            save();
        });
    }

    tampilkanBahasa(lang);
})();
