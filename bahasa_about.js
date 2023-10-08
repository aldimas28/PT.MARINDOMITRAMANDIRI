(function () {
    const Bahasa = {
        "indonesia": {
            Home: "Beranda",
            About: "Tentang",
            Products: "Produk",
            Contact: "Kontak",
            judul1: "TENTANG KAMI",
            dex1n1: "Bekerja sama adalah tujuan utama kami!",
            dex1n2: "PT.MARINDO MITRA MANDIRI adalah perusaahan yang bergerak di bidang hasil pertanian/perkebunan (karet), penjualan alat tulis kantor/barang cetakan. alat tekin/mekanikal/elektrikal, penjualan produk makanan, serta jasa konsultasi bisnis dan managejemen, kuhusus nya di bidang sumber daya manusia . dengan semangat melayani, kami berfokus pada kualitas,kuantitas dan kebutuhan pelanggan.",
            dex1n3: "Beberapa Fakta Keren",
            dex1n4: "Angka-angka Berbicara Untuk Dirinya Sendiri",
            dex1n5: "Produk",
            dex1n6: "kerja sama",
            dex1n7: "Proyek yang Telah Selesai",
            dex2n1: "Kualitas adalah yang utama! Kami Memastikan Bahwa Setiap Detail Menit Diperhatikan Saat Memproduksi Produk Terkecil Sekalipun. Fokus Kami Adalah 100% Pada Kebutuhan Dan Kepuasan Klien.",
            dex2n2: "Menjadi perusahaan terkemuka dan paling di kagumi di bidangnya,serta mengutamakan kebutuhan dan memberikan pelayanan terbaik secara profesonal",
            dex2n3: "- berorientasi pada kebutuhan / keinginan pelanggan",
            dex2n4: "- menjadikan kepuasan dan kepercayaan addalah pioritas utama",
            dex2n5: "- memberikan pelayanan terbaik dan profesonal",
            dex2n6: "- memberikan komitmen dan nilai terbaik",


        },
        "english": {
            judul1: "ABOUT US",
            Home: "Home",
            About: "About",
            Products: "Products",
            Contact: "Contact",
            dex1n1: "Working together is our main goal!",
            dex1n2: "PT.MARINDO MITRA MANDIRI is a company engaged in agricultural / plantation products (rubber), sales of office stationery / printed matter. technical / mechanical / electrical equipment, sales of food products, as well as business and management consulting services, especially in the field of human resources. with the spirit of serving, we focus on quality, quantity and customer needs.",
            dex1n3: "Some Cool Facts",
            dex1n4: "Numbers Speak For Themselves",
            dex1n5: "Products",
            dex1n6: "cooperation",
            dex1n7: "Completed Projects",
            dex2n1: "Quality Comes First! We Make Sure That Every Minute Detail Is Looked Into While Manufacturing Even The Smallest Product. Our Focus Is 100% On Client Needs And Satisfaction.",
            dex2n2: "To be the leading and most admired company in its field, as well as prioritizing needs and providing the best service professionally.",
            dex2n3: "- oriented to customer needs/wants",
            dex2n4: "- making satisfaction and trust a top priority.",
            dex2n5: "- provide the best and professional service",
            dex2n6: "- providing the best commitment and value",

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
                                                    href="/index.html"
                                                    class="custom-logo-link transparent-custom-logo" rel="home"
                                                    itemprop="url" aria-label="Sierra Industry">
                                                    <img width="80"
                                                        height="40"
                                                        src="img/logopt.png"
                                                        class="custom-logo" alt decoding="async" loading="lazy"
                                                        srcset /></a></span>
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
                                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-15">
                                                                <a href="/index.html"
                                                                    class="menu-link">${hasil.Home}</a></li>
                                                            <li id="menu-item-14"
                                                                class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-14">
                                                                <a href="/about.html"
                                                                    aria-current="page" class="menu-link">${hasil.About}</a>
                                                            </li>
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
                        <article class="post-7 page type-page status-publish ast-article-single" id="post-7"
                            itemtype="https://schema.org/CreativeWork" itemscope="itemscope">
                            <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                            </header>
                            <div class="entry-content clear" itemprop="text">
                                <div data-elementor-type="wp-post" data-elementor-id="7"
                                    class="elementor elementor-7">
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-1b5d768b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1b5d768b" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1608c15b"
                                                data-id="1608c15b" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-321a34b8 elementor-widget elementor-widget-heading"
                                                        data-id="321a34b8" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h1 class="elementor-heading-title elementor-size-default">
                                                                ${hasil.judul1}</h1>
                                                             <h5 class="elementor-heading-title elementor-size-default">
                                                                PT.MARINDO MITRA MANDIRI</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-54dfedde elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="54dfedde" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3b5232b7"
                                                data-id="3b5232b7" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    
                                                    <div class="elementor-element elementor-element-ac1409d elementor-widget elementor-widget-heading"
                                                        data-id="ac1409d" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                                ${hasil.dex1n1}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3cf1fd6"
                                                data-id="3cf1fd6" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-8f14f19 elementor-widget elementor-widget-heading"
                                                        data-id="8f14f19" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h3 class="elementor-heading-title elementor-size-default">
                                                                PT.MARINDO MITRA MANDIRI</h3>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-48d89661 elementor-widget elementor-widget-text-editor"
                                                        data-id="48d89661" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>
                                                                ${hasil.dex1n2}   
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-46a61cc4 elementor-widget elementor-widget-text-editor"
                                                        data-id="46a61cc4" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container" style="display: flex; justify-content: center; align-items: center;">
                                                        <img src="img/logopt.png" alt="marindo" width="100">
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-40a873ed elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="40a873ed" data-element_type="section">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b7e5e6f"
                                                data-id="7b7e5e6f" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <section
                                                        class="elementor-section elementor-inner-section elementor-element elementor-element-34031a92 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                        data-id="34031a92" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-5448305b"
                                                                data-id="5448305b" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-467a4611 elementor-widget elementor-widget-heading"
                                                                        data-id="467a4611" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h5
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                ${hasil.dex1n3}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-8b5a159 elementor-widget elementor-widget-heading"
                                                                        data-id="8b5a159" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h2
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                ${hasil.dex1n4}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4633458d"
                                                                data-id="4633458d" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-3203a315 elementor-widget elementor-widget-counter"
                                                                        data-id="3203a315" data-element_type="widget"
                                                                        data-widget_type="counter.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-counter">
                                                                                <div
                                                                                    class="elementor-counter-number-wrapper">
                                                                                    <span
                                                                                        class="elementor-counter-number-prefix"></span>
                                                                                    <span
                                                                                        class="elementor-counter-number"
                                                                                        data-duration="2000"
                                                                                        data-to-value="30"
                                                                                        data-from-value="0"
                                                                                        data-delimiter=",">0</span>
                                                                                    <span
                                                                                        class="elementor-counter-number-suffix"></span>
                                                                                </div>
                                                                                <div class="elementor-counter-title">
                                                                                    ${hasil.dex1n5}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-52bad5d5"
                                                                data-id="52bad5d5" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-4267e238 elementor-widget elementor-widget-counter"
                                                                        data-id="4267e238" data-element_type="widget"
                                                                        data-widget_type="counter.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-counter">
                                                                                <div
                                                                                    class="elementor-counter-number-wrapper">
                                                                                    <span
                                                                                        class="elementor-counter-number-prefix"></span>
                                                                                    <span
                                                                                        class="elementor-counter-number"
                                                                                        data-duration="2000"
                                                                                        data-to-value="67"
                                                                                        data-from-value="0"
                                                                                        data-delimiter=",">0</span>
                                                                                    <span
                                                                                        class="elementor-counter-number-suffix"></span>
                                                                                </div>
                                                                                <div class="elementor-counter-title">
                                                                                    ${hasil.dex1n6}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4e9c9540"
                                                                data-id="4e9c9540" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-3bbb0bc4 elementor-widget elementor-widget-counter"
                                                                        data-id="3bbb0bc4" data-element_type="widget"
                                                                        data-widget_type="counter.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-counter">
                                                                                <div
                                                                                    class="elementor-counter-number-wrapper">
                                                                                    <span
                                                                                        class="elementor-counter-number-prefix"></span>
                                                                                    <span
                                                                                        class="elementor-counter-number"
                                                                                        data-duration="2000"
                                                                                        data-to-value="250"
                                                                                        data-from-value="0"
                                                                                        data-delimiter=",">0</span>
                                                                                    <span
                                                                                        class="elementor-counter-number-suffix"></span>
                                                                                </div>
                                                                                <div class="elementor-counter-title">
                                                                                    ${hasil.dex1n7}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <div class="elementor-element elementor-element-652202b3 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                        data-id="652202b3" data-element_type="widget"
                                                        data-widget_type="divider.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-divider">
                                                                <span class="elementor-divider-separator">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-75c6e16 elementor-widget elementor-widget-heading"
                                                        data-id="75c6e16" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h3 class="elementor-heading-title elementor-size-default">
                                                                ${hasil.dex2n1}    
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <section
                                                        class="elementor-section elementor-inner-section elementor-element elementor-element-64bad8ef elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                        data-id="64bad8ef" data-element_type="section">
                                                        <div class="elementor-container elementor-column-gap-no">
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-19915fea"
                                                                data-id="19915fea" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-576562dc elementor-widget elementor-widget-heading"
                                                                        data-id="576562dc" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h4
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                Visi</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-1b42c948 elementor-widget elementor-widget-text-editor"
                                                                        data-id="1b42c948" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">
                                                                            <p>
                                                                                ${hasil.dex2n2}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1b7618ac"
                                                                data-id="1b7618ac" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-77e8f18a elementor-widget elementor-widget-heading"
                                                                        data-id="77e8f18a" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h4
                                                                                class="elementor-heading-title elementor-size-default">
                                                                                Misi</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="elementor-element elementor-element-77bd1f07 elementor-widget elementor-widget-text-editor"
                                                                        data-id="77bd1f07" data-element_type="widget"
                                                                        data-widget_type="text-editor.default">
                                                                        <div class="elementor-widget-container">
                                                                            <p>${hasil.dex2n3}</p>
                                                                            <p>${hasil.dex2n4}</p>
                                                                            <p>${hasil.dex2n5}</p>
                                                                            <p>${hasil.dex2n6}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6b78afac"
                                                                data-id="6b78afac" data-element_type="column">
                                                                <div
                                                                    class="elementor-widget-wrap elementor-element-populated">
                                                                    <div class="elementor-element elementor-element-86891f2 elementor-widget elementor-widget-heading"
                                                                        data-id="86891f2" data-element_type="widget"
                                                                        data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/npKlLjV3h04" frameborder="0" allowfullscreen="true"></iframe>
                                                                        </div>                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
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