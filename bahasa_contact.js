(function () {
    const Bahasa = {
        "indonesia": {
            Home: "Beranda",
            About: "Tentang",
            Products: "Produk",
            Contact: "Kontak",
            judul1: "Kontak",
            dex1n1: "Hubungi Kami",
            dex1n2: "Untuk info atau pertanyaan lebih lanjut hubungi Admin"


        },
        "english": {
            judul1: "Contact",
            Home: "Home",
            About: "About",
            Products: "Products",
            Contact: "Contact",
            dex1n1: "Contact Us",
            dex1n2: "For further information or inquiries contact Admin",

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
                                        itemprop="url" aria-label="Sierra Industry"><img width="80"
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
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
                                            <a href="/about.html"
                                                class="menu-link">${hasil.About}</a></li>
                                        <li id="menu-item-11"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11">
                                            <a href="/product.html"
                                                class="menu-link">${hasil.Products}</a></li>
                                        <li id="menu-item-13"
                                                class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8 current_page_item menu-item-13">
                                                <a href="/contact.html"
                                                    aria-current="page" class="menu-link">${hasil.Contact}</a>
                                            </li>
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
                        <article class="post-10 page type-page status-publish ast-article-single" id="post-10"
                            itemtype="https://schema.org/CreativeWork" itemscope="itemscope">
                            <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                            </header>
                            <div class="entry-content clear" itemprop="text">
                                <div data-elementor-type="wp-post" data-elementor-id="10"
                                    class="elementor elementor-10">
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-4b338299 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="4b338299" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e88262f"
                                                data-id="e88262f" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-6ea88e8 elementor-widget elementor-widget-heading"
                                                        data-id="6ea88e8" data-element_type="widget"
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
                                        class="elementor-section elementor-top-section elementor-element elementor-element-4e46c794 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="4e46c794" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-34161499"
                                                data-id="34161499" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-5dd6df15 elementor-widget elementor-widget-heading"
                                                        data-id="5dd6df15" data-element_type="widget"
                                                        data-widget_type="heading.default">
                                                        <div class="elementor-widget-container">
                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                            ${hasil.dex1n1}</h2>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-2cc856f5 elementor-widget elementor-widget-text-editor"
                                                        data-id="2cc856f5" data-element_type="widget"
                                                        data-widget_type="text-editor.default">
                                                        <div class="elementor-widget-container">
                                                            <p>${hasil.dex1n2}</p>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-element elementor-element-7f9c823b elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                        data-id="7f9c823b" data-element_type="widget"
                                                        data-widget_type="icon-list.default">
                                                        <div class="elementor-widget-container">
                                                          <a href="https://wa.me/+6282125036568" ><h4>Hubungi via WhatsApp : +6282125036568</h4></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1eae0df4"
                                                data-id="1eae0df4" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-793b3dbf elementor-widget elementor-widget-shortcode"
                                                        data-id="793b3dbf" data-element_type="widget"
                                                        data-widget_type="shortcode.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-shortcode">
                                                                <div class="wpforms-container " id="wpforms-338">
                                                                    <img src="img/admin.png" width="500 px" alt="" style="border-radius: 10px;">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section
                                        class="elementor-section elementor-top-section elementor-element elementor-element-639dbce2 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                        data-id="639dbce2" data-element_type="section"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-background-overlay"></div>
                                        <div class="elementor-container elementor-column-gap-no">
                                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c9c788a"
                                                data-id="3c9c788a" data-element_type="column">
                                                <div class="elementor-widget-wrap elementor-element-populated">
                                                    <div class="elementor-element elementor-element-3dc4ef37 elementor-widget elementor-widget-google_maps"
                                                        data-id="3dc4ef37" data-element_type="widget"
                                                        data-widget_type="google_maps.default">
                                                        <div class="elementor-widget-container">
                                                            <div class="elementor-custom-embed">
                                                                <iframe loading="lazy"
                                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3182359089064!2d108.64178167420518!3d-6.852404693145924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f056eddeb0499%3A0xcaa0c06a773e09fc!2sBalai%20Desa%20Karangsembung!5e0!3m2!1sid!2sid!4v1695171665007!5m2!1sid!2sid"
                                                                    title="Pabrik Karet"
                                                                    aria-label="Pabrik Karet"></iframe>
                                                            </div>
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
