(function () {
    const Bahasa = {
        "indonesia": {
            Home: "Beranda",
            About: "Tentang",
            Products: "Produk",
            Contact: "Kontak",
            judul1: "PRODUK"


        },
        "english": {
            judul1: "PRODUCTS",
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
                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
                                                            <a href="/about.html"
                                                                class="menu-link">${hasil.About}</a></li>
                                                        <li id="menu-item-13"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8 current_page_item menu-item-13">
                                                            <a href="/product.html"
                                                                aria-current="page" class="menu-link">${hasil.Products}</a>
                                                        </li>
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
                    <article class="post-8 page type-page status-publish ast-article-single" id="post-8"
                        itemtype="https://schema.org/CreativeWork" itemscope="itemscope">
                        <header class="entry-header ast-no-thumbnail ast-no-title ast-header-without-markup">
                        </header>
                        <div class="entry-content clear" itemprop="text">
                            <div data-elementor-type="wp-post" data-elementor-id="8"
                                class="elementor elementor-8">
                                <section
                                    class="elementor-section elementor-top-section elementor-element elementor-element-39dabc18 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="39dabc18" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div class="elementor-background-overlay"></div>
                                    <div class="elementor-container elementor-column-gap-no">
                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f60585f"
                                            data-id="f60585f" data-element_type="column">
                                            <div class="elementor-widget-wrap elementor-element-populated">
                                                <div class="elementor-element elementor-element-438af913 elementor-widget elementor-widget-heading"
                                                    data-id="438af913" data-element_type="widget"
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
                                    class="elementor-section elementor-top-section elementor-element elementor-element-e160972 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="e160972" data-element_type="section"
                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    
                                    <div class="elementor-container elementor-column-gap-no gap-4" style="display: flex; justify-content: center; align-items: center;">
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Keset Karet</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/keset1.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Neoprene Rubber Moulded Parts</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/Elastomers.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Injection</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/inject1.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>penutup karet</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/penutup.jpeg" alt="">
                                    </div>
                                </div>
                                
                          
                            </div>
                                    
                                    <br>


                                    <div class="elementor-container elementor-column-gap-no gap-4" style="display: flex; justify-content: center; align-items: center;">
                               
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Kit</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/kit.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>bowel</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/bwel.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Rubber O Ring</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/ring.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>O-Ring</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/ring1.jpeg" alt="">
                                    </div>
                                </div>
                                

                            </div>

                                    <br>

                                   

                                    <br>

                                    <div class="elementor-container elementor-column-gap-no gap-4" style="display: flex; justify-content: center; align-items: center;">
                                       
                                    <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Gasket Selang Karet</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/Selang.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Rubber Shoe</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/Rubber.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>Rubber Cow Nipple</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/Cow.jpeg" alt="">
                                    </div>
                                </div>
                                
                                <div class="custom-card">
                                    <div class="custom-card-header">
                                        <div><b>O Ring</b></div>
                                        <div><a href="https://wa.me/+6282125036568" class="custom-btn">beli</a></div>
                                    </div>
                                    <div class="custom-card-body">
                                        <img src="img/img/ring2.jpeg" alt="">
                                    </div>
                                </div>
                                 
                                    
                                    </div>



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
