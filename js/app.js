window.onload = function() {
    if ($(window).width() > 992) {
        $(window).scroll(function(){  
            if ($(this).scrollTop() > 40) {
                $('#navbar_top').addClass("fixed-top");
                // add padding top to show content behind navbar
                $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            }else{
                $('#navbar_top').removeClass("fixed-top");
                // remove padding top from body
                $('body').css('padding-top', '0');
            }   
        });
    } // end if


    let consentButton = document.querySelector('#cookies button')
    if (consentButton) {
        consentButton.addEventListener('click', function() {
            consentButton.parentElement.classList.add('d-none');
        })
    }

    // function Algolia(algoliaserachcontainer, autcomplete_algolia) {
    //     this.debug = !0;
    //     this.hideContainerOnMouseLeave = !0;
    //     this.trackingTimeoutToken = !1;
    //     this.trackingTimeoutInterval = 1000;
    //     this.firstResult = { metier: !1, operation: !1, prestation: !1, professionnel: !1 };
    //     this.mode = "standard";
    //     this.click = !1;
    //     this.algoliaserachcontainer = algoliaserachcontainer;
    //     this.autcomplete_algolia = autcomplete_algolia;
    // }
    // Algolia.prototype.log = function (data) {
    //     if (this.debug) {
    //         console.log(data);
    //     }
    // };
    // Algolia.prototype.searchCallback = function (err, content) {
    //     if (err) {
    //         this.log(err);
    //         return;
    //     }
    //     if (this.autcomplete_algolia == "#autcomplete_gamme_algolia") {
    //         var offset = $(window).width() < 1010 ? 0 : 150;
    //         $("html, body").animate({ scrollTop: $("#gamme_serach").offset().top - offset }, 1000);
    //     }
    //     if (content.results) {
    //         if (this.algoliaserachcontainer == "#algoliaserachcontainer") {
    //             window.scrollTo(0, 0);
    //         }
    //         this.firstResult = { metier: !1, operation: !1, prestation: !1 };
    //         var container = jQuery(this.algoliaserachcontainer);
    //         var _html = this.mode == "standard" ? '<div class="container"><div class="row">' : '<div class="row">';
    //         var tmp;
    //         var query = "";
    //         var hasResult = !1;
    //         for (var i = 0; i < content.results.length; i++) {
    //             tmp = "";
    //             query = content.results[i].query;
    //             if (content.results[i].index === "metier" && content.results[i].nbHits > 0 && content.results[i].aroundLatLng == undefined) {
    //                 for (var j = 0; j < content.results[i].hits.length; j++) {
    //                     if (this.firstResult.metier === !1) {
    //                         this.firstResult.metier = "resMetier" + j;
    //                     }
    //                     tmp += this.displayMetier(content.results[i].hits[j], content.results[i].query, j);
    //                     hasResult = !0;
    //                 }
    //                 _html += '<div class="col-12 ' + (this.mode == "standard" ? "col-md-4 " : "") + ' searchresult"><h2>Nos m�tiers :</h2><ul>' + tmp + "</ul></div>";
    //             } else if (!1 && Global.lat == null && Global.lat == null && content.results[i].index == "metier" && content.results[i].aroundLatLng != undefined) {
    //                 var tmpLoc = content.results[i].aroundLatLng.split(",");
    //                 Global.lat = tmpLoc[0];
    //                 Global.lng = tmpLoc[1];
    //             } else if (content.results[i].index === "operation" && content.results[i].nbHits > 0) {
    //                 var cpt = 0;
    //                 for (var j = 0; j < content.results[i].hits.length; j++) {
    //                     if (this.firstResult.operation === !1) {
    //                         this.firstResult.operation = "resOperation" + j;
    //                     }
    //                     tmp += this.displayOperation(content.results[i].hits[j], content.results[i].query, cpt >= 3, j);
    //                     if (content.results[i].hits[j].ope_prixmoy_france > 1) {
    //                         cpt++;
    //                     }
    //                     hasResult = !0;
    //                 }
    //                 if (tmp != "") {
    //                     _html += '<div class="col-12 ' + (this.mode == "standard" ? "col-md-8 " : "") + 'searchresult"><h2>Nos offres tout compris :</h2><ul>' + tmp + "</ul></div>";
    //                 }
    //             } else if (this.mode === "standard" && content.results[i].index === "prestation" && content.results[i].nbHits > 0) {
    //                 for (var j = 0; j < content.results[i].hits.length; j++) {
    //                     if (this.firstResult.prestation === !1) {
    //                         this.firstResult.prestation = "resPrestation" + j;
    //                     }
    //                     tmp += this.displayPrestation(content.results[i].hits[j], content.results[i].query);
    //                     hasResult = !0;
    //                 }
    //                 _html += '<div class="col-12 col-md-4 searchresult"><h2>Nos prestations :</h2><ul>' + tmp + "</ul></div>";
    //             } else if (this.mode === "standard" && content.results[i].index === "professionnel" && content.results[i].nbHits > 0) {
    //                 for (var j = 0; j < content.results[i].hits.length; j++) {
    //                     if (this.firstResult.professionnel === !1) {
    //                         this.firstResult.professionnel = "resProfessionnel" + j;
    //                     }
    //                     tmp += this.displayProfessionnel(content.results[i].hits[j], content.results[i].query);
    //                     hasResult = !0;
    //                 }
    //                 _html += '<div class="col-12 col-md-8 searchresult"><h2>Nos Pros 100% pros :</h2><ul><li>' + tmp + "</li></ul></div>";
    //             }
    //         }
    //         if (hasResult === !1) {
    //             _html = this.displayNoResult(query);
    //         }
    //         if (this.mode === "standard") {
    //             _html += "</div>";
    //         }
    //         _html += "</div>";
    //         container.html(_html);
    //         container.css("display", "block");
    //     }
    // };
    // Algolia.prototype.displayOperation = function (elem, query, hideMobile, i) {
    //     if (elem && elem.ope_prixmin_france > 1) {
    //         var imageSrc = elem.ope_image != "" ? "/images/operation/" + elem.ope_image : "/images/2016-refonte/picto-operation.png";
    //         var _html =
    //           '<li id="resOperation' +
    //           i +
    //           '" class="navigationoperation' +
    //           (hideMobile ? " hide-on-small-only" : "") +
    //           "\" onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur op�ration', '', {'nonInteraction': 1});return algoliaTop.clickResult('operation', {id:" +
    //           elem.ope_id +
    //           ",lib:'" +
    //           elem.ope_lib.replace(/'/g, "\\'") +
    //           "',image:'" +
    //           imageSrc +
    //           "'}, '" +
    //           query.replace(/'/g, "\\'") +
    //           "');\">" +
    //           '<a class="row" title="Voir et choisir mon professionnel" href="javascript:void(0);" >';
    //         if (imageSrc != "") {
    //             _html += '<div class="flex-1">' + '<img src="' + imageSrc + '" class="responsive " width="40px" height="40px"></div>';
    //         }
    //         _html += '<div class="flex-8">' + this.highlightQuery(elem.ope_lib, query) + "</br>" + '<span class="orange-text">� partir de ' + number_format(elem.ope_prixmin_france, 0, ".", " ") + "&euro; TTC";
    //         if (elem.uni_id != undefined && elem.uni_id != 0) {
    //             _html += "/" + elem.uni_unite;
    //         }
    //         _html += '<i class="arrow-right"></i></span> ';
    //         _html += "</div>" + "</a></li>";
    //         return _html;
    //     }
    //     return "";
    // };
    // Algolia.prototype.displayMetier = function (elem, query, i) {
    //     if (elem) {
    //         let imageSrc = elem.met_image !== "" ? "/images/prestation/" + elem.met_image : "/images/2016-refonte/picto-operation.png";
    //         let _html =
    //           '<li id="resMetier' +
    //           i +
    //           "\" onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur m�tier', '', {'nonInteraction': 1});return algoliaTop.clickResult('metier', {id:" +
    //           elem.met_id +
    //           ",lib:'" +
    //           elem.met_metier.replace(/'/g, "\\'") +
    //           "',image:'/images/prestation/" +
    //           elem.met_image +
    //           "'},'" +
    //           query.replace(/'/g, "\\'") +
    //           "');\">" +
    //           '<a class="row" href="javascript:void(0);">';
    //         if (imageSrc !== "") {
    //             _html += '<div class="flex-1" ><img src="' + imageSrc + '" class="responsive" width="40px" height="40px"></div>';
    //         }
    //         _html += '<div class="flex-8">' + this.highlightQuery(elem.met_metier, query);
    //         if (elem.met_nbnote > 1) {
    //             _html += "<small><br>" + elem.met_nbnote + " professionnel" + (elem.met_nbnote > 1 ? "s" : "") + "</small>";
    //         }
    //         _html += "</div>" + "</a></li>";
    //         return _html;
    //     } else {
    //         return "";
    //     }
    // };
    // Algolia.prototype.displayPrestation = function (elem, query, i) {
    //     if (elem) {
    //         let _html =
    //           '<li id="resPrestation' +
    //           i +
    //           "\" onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur prestation', '', {'nonInteraction': 1});return algoliaTop.clickResult('prestation', {id:" +
    //           elem.pre_id +
    //           ",lib:'" +
    //           elem.pre_prestation.replace(/'/g, "\\'") +
    //           "',image:'/images/prestation/" +
    //           elem.pre_image +
    //           "'}, '" +
    //           query.replace(/'/g, "\\'") +
    //           "');\">" +
    //           '<a href="javascript:void(0);">';
    //         _html += '<div class="text">' + this.highlightQuery(elem.pre_prestation, query);
    //         _html += "</div>" + "</a></li>";
    //         return _html;
    //     } else {
    //         return "";
    //     }
    // };
    // Algolia.prototype.displayProfessionnel = function (elem, query, i) {
    //     if (elem) {
    //         let image;
    //         if (elem.pro_logo !== "") {
    //             image = "/images/logo/" + elem.pro_logo;
    //         } else if (elem.por_image !== "") {
    //             image = elem.por_image;
    //         } else {
    //             image = "/images/artisan/picto-pro-default.jpg";
    //         }
    //         let _html =
    //           '<li id="resProfessionnel' +
    //           i +
    //           "\" onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur professionnel', '', {'nonInteraction': 1});return algoliaTop.clickResult('professionnel', {id:" +
    //           elem.pro_id +
    //           ",lib:'" +
    //           elem.pro_nomcom.replace(/'/g, "\\'") +
    //           "',image:'" +
    //           image +
    //           "'}, '" +
    //           query.replace(/'/g, "\\'") +
    //           "');\">" +
    //           '<a class="row" href="javascript:void(0);">';
    //         _html += '<div class="flex-1" ><img src="' + image + '" class="responsive" width="40px" height="40px"></div>';
    //         _html += '<div class="flex-8">' + this.highlightQuery(elem.pro_nomcom, query);
    //         _html += "<br /><span>" + elem.met_metier + "</span>";
    //         _html += "</div>" + "</a></li>";
    //         return _html;
    //     } else {
    //         return "";
    //     }
    // };
    // Algolia.prototype.displayNoResult = function (query) {
    //     ga("send", "event", "Moteur recherche", "Pas de resultat", query, { nonInteraction: 1 });
    //     return (
    //       '<div class="container"><h3 class="text-center my-3"><i class="fa fa-frown-o" aria-hidden="true"></i> Pas l\'ombre d\'un r�sultat pour votre recherche "' +
    //       query +
    //       '"  </h3><p  class="text-center"><a href="/rechercher" class="btn btn-orange mt-4">Trouver mon artisan <i class="arrow-right"></i></a></p></div>'
    //     );
    // };
    // Algolia.prototype.highlightQuery = function (string, searchQuery) {
    //     if (!string) {
    //         return "";
    //     }
    //     var expr = searchQuery;
    //     expr = expr.replace(/\s+/, "|", searchQuery);
    //     var regex = new RegExp(expr, "gi");
    //     return string.replace(regex, function ($1) {
    //         return '<span class="highlight">' + $1 + "</span>";
    //     });
    // };
    // Algolia.prototype.getSerachLink = function (elem, id_elem, query) {
    //     return "/docs/recherchegeoloc.php?ville=&lat=" + Global.lat + "&lng=" + Global.lng + "&radius=50&dev_id" + elem + "=" + id_elem + "&champ-texte=&searchalgo=" + query;
    // };
    // Algolia.prototype.getSerachHidden = function (elem, id_elem, query) {
    //     var _html = '<input type="hidden" name="lat" value="' + Global.lat + '" />';
    //     _html += '<input type="hidden" name="lng" value="' + Global.lng + '" />';
    //     _html += '<input type="hidden" name="radius" value="50" />';
    //     _html += '<input type="hidden" name="dev_id' + elem + '" value="' + id_elem + '" />';
    //     _html += '<input type="hidden" name="champ-texte" value="" />';
    //     _html += '<input type="hidden" name="searchalgo" value="' + query + '" />';
    //     return _html;
    // };
    // Algolia.prototype.clickResult = function (type, elem, query) {
    //     if (!1 && this.mode == "standard") {
    //         $("body").animate({ scrollTop: 0 }, 700);
    //         var _html = '<div id="choixLieu" class="container row" style="display: none;">';
    //         _html += '<div class="col s12 push-m2 m8  push-l3 l6">';
    //         _html += "<h2>Localisation</h2>";
    //         _html += '<form method="get" action="/docs/recherchegeoloc.php">';
    //         _html += this.getSerachHidden(type, elem.id, query);
    //         _html += '<div class="text-center"><h3>O� recherchez-vous ';
    //         if (type == "metier") {
    //             _html += "un " + elem.lib + " ?</h3></div>";
    //         } else if (type == "operation") {
    //             _html += "un professionnel pour " + elem.lib + " ?</h3></div>";
    //         } else if (type == "prestation") {
    //             _html += "un professionnel pour " + elem.lib + " ?</h3></div>";
    //         }
    //         _html +=
    //           "<button type=\"submit\" id=\"algoliaGeolocButtun\" class=\"btn orange col s12 \" onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur me geolocaliser', '', {'nonInteraction': 1});return this.geoloc(); return false;\"><i class=\"fa fa-map-marker fa-2x\" aria-hidden=\"true\"></i> Me Localiser</button>";
    //         _html += '<div id="algoliaGeolocError" style="display: none;" class="red"></div>';
    //         _html += '<h3 class="text-center"><br><br>  ou </h3>';
    //         _html += '<div class="form-control col s12"><label for="ville_algolia">Ville ou code postal: </label><input type="text" name="algolia_ville" id="ville_algolia" value="" class="ville_algolia">';
    //         _html += "</div>";
    //         _html +=
    //           "<div class=\"col s12\"><button disabled onclick=\"ga('send', 'event', 'Moteur recherche', 'Clic sur rechercher', '', {'nonInteraction': 1});\" class=\"btn btn-large  col s12 waves-effect waves-light button_soumission disabled\" id=\"algoliaBtnSearch\">";
    //         if (type == "metier") {
    //             _html += "Rechercher";
    //         } else if (type == "operation") {
    //             _html += "Rechercher";
    //         } else if (type == "prestation") {
    //             _html += "Rechercher";
    //         }
    //         _html += "</button></div>";
    //         _html += "</form>";
    //         _html += "</div>";
    //         _html += "</div>";
    //         jQuery(this.algoliaserachcontainer).append(_html);
    //         this.startAutocomplete();
    //         if (Global.lat != null && Global.lng != null) {
    //             this.getVilleByLatLng({ coords: { latitude: Global.lat, longitude: Global.lng } });
    //         }
    //         jQuery(".searchresult").fadeOut(function () {
    //             jQuery("#choixLieu").fadeIn();
    //             jQuery("#ville_algolia").focusWithoutScrolling();
    //         });
    //         return !1;
    //     } else if (type === "professionnel") {
    //         window.location.href = "/annuaire/p." + elem.id + ".html";
    //     } else {
    //         window.location.href = "/rechercher/" + type + "/" + elem.id;
    //     }
    // };
    // Algolia.prototype.clickFirstResult = function () {
    //     var elem = !1;
    //     if (this.firstResult.metier !== !1) elem = this.firstResult.metier;
    //     else if (this.firstResult.operation !== !1) elem = this.firstResult.operation;
    //     else if (this.firstResult.prestation !== !1) elem = this.firstResult.prestation;
    //     if (elem !== !1) {
    //         jQuery("#" + elem).focus();
    //         jQuery("#" + elem).click();
    //     }
    //     return !1;
    // };
    // Algolia.prototype.geoloc = function () {
    //     this.click = !0;
    //     var refThis = this;
    //     if ($("#ville_algolia").val()) {
    //         $.get("/docs/options_autocompletion.php?format=json&debut=" + $("#ville_algolia").val(), function (data) {
    //             data = JSON.parse(data);
    //             if (typeof data[0] !== "undefined") {
    //                 refThis.getVilleByLatLng({ coords: { latitude: data[0].lat, longitude: data[0].lng } });
    //             }
    //         });
    //     } else if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(this.getVilleByLatLng, this.erreurGeolocNavigateur, { maximumAge: 600000, timeout: 60000 });
    //     } else if (Global.lat != null && Global.lng != null) {
    //         this.getVilleByLatLng({ coords: { latitude: Global.lat, longitude: Global.lng } });
    //     } else {
    //         jQuery("#ville_algolia").focusWithoutScrolling();
    //         jQuery("#buttonMeLocaliser").fadeOut();
    //         this.erreurGeolocNavigateur();
    //     }
    //     return !1;
    // };
    // Algolia.prototype.getVilleByLatLng = function (pos) {
    //     var refThis = this;
    //     var lat = null;
    //     var lng = null;
    //     if (typeof pos == "object") {
    //         lat = pos.coords.latitude;
    //         lng = pos.coords.longitude;
    //     } else {
    //         var tabloc = pos.split(":");
    //         lat = tabloc[0];
    //         lng = tabloc[1];
    //     }
    //     Global.lat = lat;
    //     Global.lng = lng;
    //     var elsLat = document.getElementsByName("lat");
    //     for (var iLat = 0; iLat < elsLat.length; iLat++) {
    //         elsLat[iLat].value = Global.lat;
    //     }
    //     var elsLng = document.getElementsByName("lng");
    //     for (var iLng = 0; iLng < elsLng.length; iLng++) {
    //         elsLng[iLng].value = Global.lng;
    //     }
    //     setCookie("lat_long", Global.lat + ":" + Global.lng);
    //     $.get("/docs/options_geoloc.php?lat=" + lat + "&lon=" + lng + "&withPostcode=1", function (data) {
    //         data = traiteXmlSuggestions(data);
    //         var ville = data[0];
    //         jQuery("#ville_algolia").val(ville);
    //         jQuery("#ville_algolia").focusWithoutScrolling();
    //         algoliaTop.enableSearchButton();
    //         if (algoliaTop.click) {
    //             algoliaTop.click = !1;
    //             jQuery("#ville_algolia").closest("form").submit();
    //         }
    //     });
    // };
    // Algolia.prototype.displayInputVille = function (ville) {
    //     var _html = '<input type="text" name="algolia_ville" id="ville_algolia" value="' + ville + '" class="ville_algolia" />';
    //     jQuery("#villegeoloc_algolia").html(_html);
    //     this.startAutocomplete();
    // };
    // Algolia.prototype.startAutocomplete = function () {
    //     var refThis = this;
    //     jQuery("#ville_algolia").autocomplete({
    //         source: "/docs/options_autocompletion.php?format=json",
    //         minLength: 1,
    //         select: function (event, ui) {
    //             refThis.enableSearchButton();
    //             if (ui.item.lat && ui.item.lng) {
    //                 Global.lat = number_format(ui.item.lat, 6, ".");
    //                 Global.lng = number_format(ui.item.lng, 6, ".");
    //                 var elsLat = document.getElementsByName("lat");
    //                 for (var iLat = 0; iLat < elsLat.length; iLat++) {
    //                     elsLat[iLat].value = Global.lat;
    //                 }
    //                 var elsLng = document.getElementsByName("lng");
    //                 for (var iLng = 0; iLng < elsLng.length; iLng++) {
    //                     elsLng[iLng].value = Global.lng;
    //                 }
    //                 setCookie("lat_long", Global.lat + ":" + Global.lng);
    //             }
    //             setTimeout(function () {
    //                 refThis.hideContainerOnMouseLeave = !0;
    //             }, 1000);
    //         },
    //     });
    //     jQuery(".ui-autocomplete").on("mouseenter", function () {
    //         refThis.hideContainerOnMouseLeave = !1;
    //     });
    // };
    // Algolia.prototype.enableSearchButton = function () {
    //     var searchButtun = $("#algoliaBtnSearch");
    //     searchButtun.removeClass("disabled");
    //     searchButtun.prop("disabled", !1);
    // };
    // Algolia.prototype.erreurGeolocNavigateur = function (error) {
    //     jQuery("#algoliaGeolocError").html("R�cup�ration de la position impossible.");
    //     jQuery("#algoliaGeolocError").fadeIn();
    //     jQuery("#algoliaGeolocButtun").addClass("disabled");
    //     jQuery("#algoliaGeolocButtun").prop("disabled", !0);
    //     jQuery("#ville_algolia").focusWithoutScrolling();
    // };
    // Algolia.prototype.startSearch = function (req) {
    //     var refThis = this;
    //     this.client.search(
    //       [
    //           { indexName: "operation", query: req, params: { hitsPerPage: 9 } },
    //           { indexName: "metier", query: req, params: { hitsPerPage: 5 } },
    //           { indexName: "prestation", query: req, params: { hitsPerPage: 5 } },
    //           { indexName: "professionnel", query: req, params: { hitsPerPage: 5 } },
    //           { indexName: "metier", query: req, params: { hitsPerPage: 5, aroundLatLngViaIP: !0 } },
    //       ],
    //       function (err, content) {
    //           refThis.searchCallback(err, content);
    //       }
    //     );
    //     if (this.trackingTimeoutToken !== !1) {
    //         clearTimeout(this.trackingTimeoutToken);
    //     }
    //     this.trackingTimeoutToken = setTimeout(function () {
    //         refThis.serachTraking();
    //     }, this.trackingTimeoutInterval);
    // };
    // Algolia.prototype.serachTraking = function () {
    //     ga("send", "event", "Moteur recherche", "Recherche", "", { nonInteraction: 1 });
    // };
    // Algolia.prototype.init = function (algoliaserachcontainer, autcomplete_algolia, mode) {
    //     this.mode = mode;
    //     this.algoliaserachcontainer = algoliaserachcontainer;
    //     this.autcomplete_algolia = autcomplete_algolia;
    //     var algoliaContainerTimeout = null;
    //     var container = jQuery(this.algoliaserachcontainer);
    //     var algoliaSearchBox = jQuery(this.autcomplete_algolia);
    //     if (Global.lat != null && Global.lng != null) {
    //     }
    //     var refThis = this;
    //     $(window).click(function () {
    //         if (refThis.hideContainerOnMouseLeave) {
    //             clearTimeout(algoliaContainerTimeout);
    //             container.fadeOut(300);
    //         }
    //     });
    //     container.click(function (event) {
    //         event.stopPropagation();
    //     });
    //     algoliaSearchBox.click(function (event) {
    //         event.stopPropagation();
    //     });
    //     container.on("mouseover", function () {
    //         clearTimeout(algoliaContainerTimeout);
    //     });
    //     algoliaSearchBox.on("focus", function () {
    //         var req = jQuery(this).val();
    //         if (req != "") {
    //             clearTimeout(algoliaContainerTimeout);
    //             container.fadeIn(300);
    //         } else container.fadeOut(300);
    //     });
    //     algoliaSearchBox.on("keyup", function (ev) {
    //         if (ev.which == 13) return !1;
    //         var req = jQuery(this).val();
    //         if (req != "") refThis.startSearch(req);
    //         else container.fadeOut(300);
    //     });
    //     algoliaSearchBox.on("click", function (ev) {
    //         var req = jQuery(this).val();
    //         if (req != "") refThis.startSearch(req);
    //         else container.fadeOut(300);
    //     });
    //     placeholder();
    //     if (jQuery("#tmpSerachInput")) {
    //         jQuery("#tmpSerachInput").on("keydown", function () {
    //             jQuery("#navsearch").css("display", "inline");
    //             jQuery(refThis.autcomplete_algolia).val("");
    //             jQuery(refThis.autcomplete_algolia).focus();
    //         });
    //     }
    //     algoliaSearchBox.closest("form").on("submit", function () {
    //         return refThis.clickFirstResult();
    //     });
    // };
    // var algoliaTop;
    // $(window).on("load", function () {
    //     algoliaTop = new Algolia("", "");
    //     algoliaTop.client = algoliasearch(algolia_app_id, algolia_search_key);
    //     algoliaTop.init("#algoliaserachcontainer", "#autcomplete_algolia", "standard");
    //     $("#navSearchIcon").on("click", function () {
    //         $("#autcomplete_algolia").focus();
    //     });
    // });
    // Algolia.ph = " Quels travaux voulez-vous faire ?";
    // Algolia.searchBar = $("#autcomplete_algolia");
    // Algolia.phCount = 0;
    function randDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var iPrintLettre = 0;
    function printLetter(string, el) {
        if (iPrintLettre < string.length) {
            el.prop("placeholder", el.prop("placeholder") + string.charAt(iPrintLettre));
            iPrintLettre++;
            setTimeout(function () {
                printLetter(string, el);
            }, randDelay(50, 200));
        }
    }
    // function placeholder() {
    //     Algolia.searchBar = $("#autcomplete_algolia");
    //     Algolia.searchBar.prop("placeholder", "");
    //     printLetter(Algolia.ph, Algolia.searchBar);
    // }
    // function getXMLHTTP() {
    //     var xhr = null;
    //     if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    //     else if (window.ActiveXObject) {
    //         try {
    //             xhr = new ActiveXObject("Msxml2.XMLHTTP");
    //         } catch (e) {
    //             try {
    //                 xhr = new ActiveXObject("Microsoft.XMLHTTP");
    //             } catch (e1) {
    //                 xhr = null;
    //             }
    //         }
    //     } else {
    //         alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
    //     }
    //     return xhr;
    // }
    // function number_format(number, decimals, decPoint, thousandsSep) {
    //     number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
    //     var n = !isFinite(+number) ? 0 : +number;
    //     var prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
    //     var sep = typeof thousandsSep === "undefined" ? " " : thousandsSep;
    //     var dec = typeof decPoint === "undefined" ? "," : decPoint;
    //     var s = "";
    //     var toFixedFix = function (n, prec) {
    //         var k = Math.pow(10, prec);
    //         return "" + (Math.round(n * k) / k).toFixed(prec);
    //     };
    //     s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    //     if (s[0].length > 3) {
    //         s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    //     }
    //     if ((s[1] || "").length < prec) {
    //         s[1] = s[1] || "";
    //         s[1] += new Array(prec - s[1].length + 1).join("0");
    //     }
    //     return s.join(dec);
    // }
    // function traiteXmlSuggestions(xmlDoc) {
    //     var options = xmlDoc.getElementsByTagName("option");
    //     var optionsListe = [];
    //     for (var i = 0; i < options.length; ++i) {
    //         optionsListe.push(options[i].firstChild.data);
    //     }
    //     return optionsListe;
    // }
    function setCookie(name, value, expire, path) {
        var path = path || "/";
        var date = new Date();
        var expire = expire || date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + "; expire=" + expire + "; path=" + path;
    }
    function getCookie(name) {
        if (document.cookie.length == 0) return null;
        var regSepCookie = new RegExp("(; )", "g");
        var cookies = document.cookie.split(regSepCookie);
        for (var i = 0; i < cookies.length; i++) {
            var regInfo = new RegExp("=", "g");
            var infos = cookies[i].split(regInfo);
            if (infos[0] == name) {
                return unescape(infos[1]);
            }
        }
        return null;
    }
    // var sortresult = function (sort) {
    //     var div_entreprise = document.getElementsByClassName("liste-entreprise")[0];
    //     var div_parent = div_entreprise.parentNode;
    //     var value_select = document.getElementById("sort").value;
    //     var req = getXMLHTTP();
    //     var url = window.location.search;
    //     if (!url.match(/sort=[0-9]/) && window.location.pathname == "/docs/recherchegeoloc.php") {
    //         var url_to_send = url + "&sort=" + sort + "&refresh=ajax";
    //     } else {
    //         var url_to_send = url.replace(/sort=[0-9]/, "sort=" + sort) + "&refresh=false";
    //     }
    //     req.onreadystatechange = function () {
    //         if (req.readyState == 4) {
    //             $("#liste_entreprise_container").html(req.responseText);
    //             $(".carousel").carousel("cycle");
    //         } else if (req.readyState == 1) {
    //             $(".liste-entreprise").remove();
    //         }
    //     };
    //     req.open("GET", "/docs/recherchegeoloc.php" + url_to_send);
    //     req.send(null);
    // };
    // var changesort = function (param, ajax, elem) {
    //     if (ajax !== !1) ajax = !0;
    //     $(".span_sort").removeClass("span_sort-active");
    //     $(elem).addClass("span_sort-active");
    //     window.history.pushState("profile", null, window.location.href.replace(/sort\=[0-9]/, "sort=" + param));
    //     if (param != "") {
    //         setCookie("sort", param);
    //         if (!ajax) {
    //             var $wrapper = $(".liste-entreprise");
    //             $wrapper
    //             .find(".entreprise_infos")
    //             .sort(function (a, b) {
    //                 if (param == 0) return +a.dataset.distance - +b.dataset.distance;
    //                 else if (param == 1) return +b.dataset.avis - +a.dataset.avis;
    //                 else if (param == 2) return +b.dataset.fiabilite - +a.dataset.fiabilite;
    //             })
    //             .appendTo($wrapper);
    //         } else {
    //             if (document.getElementsByClassName("liste-entreprise")[0] && window.location.pathname == "/docs/recherchegeoloc.php") {
    //                 sortresult(param);
    //             }
    //         }
    //     }
    // };
    // var sort_is_present = function () {
    //     var parent = document.getElementById("ville_form");
    //     var cookie_exist = getCookie("lat_long");
    //     var alert2 = document.createElement("span");
    //     var text2 = document.createTextNode("\n Veuillez renseigner la ville pour votre recherche");
    //     var autocomplete = document.getElementById("autocomplete_metier");
    //     if (document.getElementById("error_sort")) {
    //         document.getElementById("error_sort").parentNode.removeChild(document.getElementById("error_sort"));
    //     }
    //     alert2.appendChild(text2);
    //     alert2.id = "error_sort";
    //     alert2.style.display = "inline-block";
    //     alert2.style.color = "red";
    //     if (document.getElementById("lst_famille_metier").name == "dev_idprofessionnel") {
    //         return !0;
    //     }
    //     if (cookie_exist == null && document.getElementById("champ-texte").value == "") {
    //         document.getElementById("champ-texte").required = !0;
    //         document.getElementById("champ-texte").parentNode.insertBefore(alert2, document.getElementById("champ-texte"));
    //         return !1;
    //     }
    //     if (document.getElementById("lst_famille_metier").value == "-1" && document.getElementById("autocomplete_metier").value != "") {
    //         autocomplete.style.border = "1px solid red";
    //         var alert3 = document.createElement("span");
    //         alert3.innerHTML = '<b class="fa fa-warning red-text fa-lg"></b> Veuillez choisir une suggestion de la liste';
    //         alert3.className = "error_select";
    //         autocomplete.parentNode.insertBefore(alert3, autocomplete.parentNode.lastChild);
    //         return !1;
    //     } else if (!bool_search) {
    //         autocomplete.style.border = "1px solid red";
    //         var alert3 = document.createElement("span");
    //         alert3.innerHTML = '<b class="fa fa-warning red-text fa-lg"></b> Veuillez choisir une suggestion de la liste';
    //         alert3.className = "error_select";
    //         autocomplete.parentNode.insertBefore(alert3, autocomplete.parentNode.lastChild);
    //         return !1;
    //     } else if (bool_search) {
    //         return !0;
    //     }
    //     if (window.location.pathname != "/docs/recherchegeoloc.php") {
    //         return !0;
    //     } else {
    //         if (document.getElementsByClassName("span_sort-active").length != 0) {
    //             document.getElementById("ville_form").submit();
    //             return !0;
    //         } else {
    //             var alert = document.createElement("span");
    //             var text = document.createTextNode("Veuillez choisir un crit�re de tri");
    //             alert.appendChild(text);
    //             alert.id = "error_sort";
    //             alert.style.color = "red";
    //             parent.insertBefore(alert, parent.getElementsByClassName("button_bg_orange")[0]);
    //             return !1;
    //         }
    //     }
    // };
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function () {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        },
    };
    $.fn.focusWithoutScrolling = function () {
        var x = window.scrollX,
          y = window.scrollY;
        this.focus();
        window.scrollTo(x, y);
        return this;
    };
    // function FormByStep(formId) {
    //     this.formId = formId;
    //     this.prevBtn = $("#" + this.formId + " .prevBtn");
    //     this.label = $("#" + this.formId + " .tab label input");
    // }
    // FormByStep.prototype.init = function (tab) {
    //     var refThis = this;
    //     this.prevBtn.on("click", function (e) {
    //         refThis.nextPrev(-1);
    //         e.stopPropagation();
    //     });
    //     this.label.on("change", function () {
    //         refThis.nextPrev(1);
    //     });
    //     this.showTab(tab);
    // };
    // FormByStep.prototype.showTab = function (n) {
    //     var x = document.getElementsByClassName("tab");
    //     x[n].style.display = "block";
    //     if (n == 0) {
    //         this.prevBtn.css("display", "none");
    //     } else {
    //         this.prevBtn.css("display", "inline");
    //     }
    //     $(x[n]).find("label input").prop("checked", !1);
    //     if (typeof declinaisonsKeys != "undefined") {
    //         var combinaisonTab = [];
    //         for (var i = 0; i <= n; i++) {
    //             if (i < n) {
    //                 combinaisonTab[$(x[i]).find("label input:checked").val()] = 1;
    //             } else {
    //                 $(x[i])
    //                 .find("label input")
    //                 .each(function (index, value) {
    //                     tmpCombinaisonArray = combinaisonTab.slice(0);
    //                     tmpCombinaisonArray[$(value).val()] = 1;
    //                     var keys = [];
    //                     for (var key in tmpCombinaisonArray) {
    //                         if (tmpCombinaisonArray.hasOwnProperty(key)) {
    //                             keys.push(key);
    //                         }
    //                     }
    //                     let combinaisonTrouvee = !1;
    //                     for (let it in declinaisonsKeys) {
    //                         let declinaison = declinaisonsKeys[it];
    //                         let nbKeysFound = 0;
    //                         for (let iKey in keys) {
    //                             let testKey = keys[iKey];
    //                             if (declinaison.match("^" + testKey + "_") || declinaison.match("_" + testKey + "$") || declinaison.match("_" + testKey + "_") || declinaison.match("^" + testKey + "$")) {
    //                                 nbKeysFound++;
    //                             }
    //                         }
    //                         if (nbKeysFound === keys.length) {
    //                             combinaisonTrouvee = !0;
    //                         }
    //                     }
    //                     if (!combinaisonTrouvee) {
    //                         $("#container_valeur_" + $(value).val()).addClass("hide");
    //                     } else {
    //                         $("#container_valeur_" + $(value).val()).removeClass("hide");
    //                     }
    //                 });
    //             }
    //         }
    //     }
    //     this.fixStepIndicator(n);
    // };
    // FormByStep.prototype.nextPrev = function (n) {
    //     var x = document.getElementsByClassName("tab");
    //     if (n == 1 && !this.validateForm()) return !1;
    //     x[currentTab].style.display = "none";
    //     currentTab = currentTab + n;
    //     if (currentTab >= x.length) {
    //         document.getElementById(this.formId).submit();
    //         return !1;
    //     }
    //     this.showTab(currentTab);
    // };
    // FormByStep.prototype.validateForm = function () {
    //     var x,
    //       y,
    //       i,
    //       valid = !0;
    //     x = document.getElementsByClassName("tab");
    //     y = x[currentTab].getElementsByTagName("input");
    //     for (i = 0; i < y.length; i++) {
    //         if (y[i].value == "") {
    //             y[i].className += " invalid";
    //             valid = !1;
    //         }
    //     }
    //     if (valid) {
    //         document.getElementsByClassName("step")[currentTab].className += " finish";
    //     }
    //     return valid;
    // };
    // FormByStep.prototype.fixStepIndicator = function (n) {
    //     var i,
    //       x = document.getElementsByClassName("step");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].className = x[i].className.replace(" active", "");
    //     }
    //     x[n].className += " active";
    // };
    // function Declinaisons() {
    //     this.result = $("#declinaisons-form");
    //     this.price = $("#declinaisons-price");
    //     this.labels = [];
    //     this.values = [];
    //     this.keys = 0;
    //     this.length = 0;
    //     this.selects = [];
    // }
    // Declinaisons.prototype.generate = function () {
    //     if (this.length > 0) {
    //         var clone = this;
    //         for (var i = 0; i < this.length; i++) {
    //             var select = $('<select class="form-control control-orange mr-4" data-id="' + i + '">');
    //             select.on("change", function () {
    //                 clone.updateSelect($(this).data("id"));
    //             });
    //             select.setValues = function (values, label) {
    //                 this.html("");
    //                 if (label) this.append($("<option hidden>").text(label).val(label));
    //                 for (var k in values) {
    //                     this.append($("<option>").text(k).val(k));
    //                 }
    //                 return this;
    //             };
    //             this.selects.push(select);
    //             this.result.append(select.hide());
    //         }
    //         if (this.selects[0]) this.initSelects();
    //     }
    // };
    // Declinaisons.prototype.initSelects = function () {
    //     this.updateSelect(-1, 1);
    // };
    // Declinaisons.prototype.updateSelect = function (id, labels) {
    //     var labels = labels || !1;
    //     var val = this.values;
    //     for (var i = 0; i <= this.length - 1; i++) {
    //         if (i > id) {
    //             this.selects[i].setValues(val, labels ? this.labels[i] : null);
    //             if (!labels) this.selects[i].show(500);
    //         }
    //         if (val[this.selects[i].val()]) {
    //             val = val[this.selects[i].val()];
    //         } else val = [];
    //         if (labels && i == 0) this.selects[i].show();
    //     }
    //     if (!labels) this.updatePrice();
    // };
    // Declinaisons.prototype.updatePrice = function () {
    //     var price = "";
    //     var vals = this.values;
    //     for (var i in this.selects) {
    //         var select = this.selects[i];
    //         if (vals[select.val()]) {
    //             vals = vals[select.val()];
    //         }
    //     }
    //     if (vals && !Array.isArray(vals)) {
    //         price = vals;
    //     }
    //     let data = vals.split("|");
    //     var m = price.match(/^([0-9]+)\|([0-9.]+)/);
    //     var id = data[0];
    //     if (m && m[1] && m[1] !== "") {
    //         id = m[1];
    //     }
    //     if (m && m[2] && m[2] !== "") {
    //         price = Math.round(parseFloat(m[2])) + "\u20AC \u25B8";
    //     }
    //     price = "Voir les prix \u25B8";
    //     this.price
    //     .attr("href", "/rechercher/operation/" + id)
    //     .text(price)
    //     .show(500);
    //     this.price.data("opeid", id);
    // };
    // function getData(url, target) {
    //     $(document).ready(function () {
    //         $.get(url, function (data) {
    //             $(target).html(data);
    //         });
    //     });
    // }
    var navsearch = $("#navsearch");
    $('[data-toggle="search"]').on("click", function () {
        if (navsearch.is(":visible")) navsearch.slideUp();
        else navsearch.slideDown();
    });
    function isVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom - (rect.height * 3) / 4 <= window.innerHeight;
    }
    function animateSteps() {
        var elmt = $(".animated .etape");
        if (elmt.length > 0) {
            var topImg = elmt.offset().top;
            var scroll = $(window).scrollTop();
            $(elmt).each(function () {
                if (isVisible(this)) {
                    $(this).css("transform", "translate(0,0)");
                    $(this).css("opacity", "1");
                }
            });
        }
    }
    $(window).on("scroll", animateSteps);
    animateSteps();
    $(".etape p").on("click", function () {
        window.location.href = "/rechercher";
    });
    var menu_gamme = $("#menu_gamme");
    var toggle_menu_gamme = $("#toggle_menu_gamme");
    if (menu_gamme.length > 0) {
        toggle_menu_gamme.on("click", function () {
            menu_gamme.slideToggle();
        });
    } else toggle_menu_gamme.hide();
    $("[data-scroll]").on("click", function (event) {
        var e = $($(this).data("scroll"));
        if (e && e.length > 0) {
            event.preventDefault();
            if (e.data("toggle") === "tab") e.tab("show");
            $("html, body").animate({ scrollTop: e.offset().top }, 750);
            return !1;
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var presenceheader = document.getElementsByTagName("header").length;
        if (scroll >= 50 && presenceheader > 0) $("body").addClass("scroll");
        else $("body").removeClass("scroll");
    });
    $("#cod_quantite").on("change", function () {
        var qty = $("#cod_quantite").val();
        qty = qty < 1 ? 1 : qty;
        qty = parseInt(qty, 10);
        $("#cod_quantite").val(qty);
        $("#hiddenQuantite").val(qty);
        var prixUnitaire = parseFloat($("#bloc-panier .prix-detail").data("prixunitaire"));
        var unite = $("#bloc-panier .prix-detail").data("unite");
        unite = unite != "aucune" ? " / " + unite : "";
        var prixSelector = $("#bloc-panier .prix-detail .prix");
        var prixEmSelector = $("#bloc-panier .prix-detail .prix_unitaire em");
        if (qty == 1) {
            prixSelector.html(prixEmSelector.html());
            prixEmSelector.fadeOut();
        } else {
            prixSelector.html((prixUnitaire * qty).toFixed(2) + "<sup>&euro;</sup>");
            prixEmSelector.fadeIn();
        }
    });

    // function checkMinMaxPrice($target) {
    //     let value = $target.val();
    //     value = value.replace(/,/g, ".");
    //     if (typeof value === "number") {
    //         value = parseFloat(value);
    //     }
    //     $target.val(value);
    //     let min = parseFloat($target.data("min"));
    //     let max = parseFloat($target.data("max"));
    //     let isOk = !0;
    //     if (value) {
    //         let $invalidFeedback = $target.parent().parent().find(".invalid-feedback");
    //         $invalidFeedback.css("display", "none");
    //         if (min && value < min) {
    //             $invalidFeedback.html("Le prix minimum est de " + min + "&euro;");
    //             $invalidFeedback.css("display", "block");
    //             isOk = !1;
    //         }
    //         if (max && value > max) {
    //             $invalidFeedback.html("Le prix maximum est de " + max + "&euro;");
    //             $invalidFeedback.css("display", "block");
    //             isOk = !1;
    //         }
    //     }
    //     return isOk;
    // }
    // (function () {
    //     "use strict";
    //     window.addEventListener(
    //       "load",
    //       function () {
    //           $(".minMaxPriceCheck").on("blur", function (event) {
    //               let $target = $(event.target);
    //               checkMinMaxPrice($target);
    //           });
    //           var forms = document.getElementsByClassName("needs-validation");
    //           var validation = Array.prototype.filter.call(forms, function (form) {
    //               form.addEventListener(
    //                 "submit",
    //                 function (event) {
    //                     let isOk = !0;
    //                     var $scrollTo = null;
    //                     $(event.target)
    //                     .find(".minMaxPriceCheck")
    //                     .each(function () {
    //                         if (!checkMinMaxPrice($(this))) {
    //                             isOk = !1;
    //                             if ($scrollTo === null) {
    //                                 $scrollTo = $(this);
    //                             }
    //                         }
    //                     });
    //                     if (!isOk) {
    //                         event.preventDefault();
    //                         event.stopPropagation();
    //                         $([document.documentElement, document.body]).animate({ scrollTop: $scrollTo.offset().top - 200 }, 1000);
    //                     }
    //                 },
    //                 !1
    //               );
    //           });
    //       },
    //       !1
    //     );
    // })();
    (function (window) {
        if (window.cookieChoices) {
            return window.cookieChoices;
        }
        var document = window.document;
        var supportsTextContent = !0;
        var cookieChoices = (function () {
            var cookieName = "displayCookieConsent";
            var cookieConsentId = "cookies";
            var dismissLinkId = "cookieChoiceDismiss";
            function _createHeaderElement(cookieText, dismissText, linkText, linkHref) {
                var butterBarStyles = "position:fixed;width:100%;background-color:#eee;" + "margin:0; left:0; bottom:0;padding:4px;z-index:1000;text-align:center;";
                var cookieConsentElement = document.createElement("div");
                cookieConsentElement.id = cookieConsentId;
                cookieConsentElement.style.cssText = butterBarStyles;
                cookieConsentElement.appendChild(_createConsentText(cookieText));
                if (!!linkText && !!linkHref) {
                    for (var i = 0; i < linkText.length; i++) {
                        cookieConsentElement.appendChild(_createInformationLink(linkText[i], linkHref[i]));
                    }
                }
                cookieConsentElement.appendChild(_createDismissLink(dismissText));
                return cookieConsentElement;
            }
            function _createDialogElement(cookieText, dismissText, linkText, linkHref) {
                var glassStyle = "position:fixed;width:100%;height:100%;z-index:999;" + "top:0;left:0;opacity:0.5;filter:alpha(opacity=50);" + "background-color:#ccc;";
                var dialogStyle = "z-index:1000;position:fixed;left:50%;top:50%";
                var contentStyle = "position:relative;left:-50%;margin-top:-25%;" + "background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;";
                var cookieConsentElement = document.createElement("div");
                cookieConsentElement.id = cookieConsentId;
                var glassPanel = document.createElement("div");
                glassPanel.style.cssText = glassStyle;
                var content = document.createElement("div");
                content.style.cssText = contentStyle;
                var dialog = document.createElement("div");
                dialog.style.cssText = dialogStyle;
                var dismissLink = _createDismissLink(dismissText);
                dismissLink.style.display = "block";
                dismissLink.style.textAlign = "right";
                dismissLink.style.marginTop = "8px";
                content.appendChild(_createConsentText(cookieText));
                if (!!linkText && !!linkHref) {
                    content.appendChild(_createInformationLink(linkText, linkHref));
                }
                content.appendChild(dismissLink);
                dialog.appendChild(content);
                cookieConsentElement.appendChild(glassPanel);
                cookieConsentElement.appendChild(dialog);
                return cookieConsentElement;
            }
            function _setElementText(element, text) {
                if (supportsTextContent) {
                    element.textContent = text;
                } else {
                    element.innerText = text;
                }
            }
            function _createConsentText(cookieText) {
                var consentText = document.createElement("span");
                _setElementText(consentText, cookieText);
                return consentText;
            }
            function _createDismissLink(dismissText) {
                var dismissLink = document.createElement("button");
                _setElementText(dismissLink, dismissText);
                dismissLink.id = dismissLinkId;
                dismissLink.classList.add("btn");
                dismissLink.style.marginLeft = "5px";
                dismissLink.style.cursor = "pointer";
                return dismissLink;
            }
            function _createInformationLink(linkText, linkHref) {
                var infoLink = document.createElement("a");
                _setElementText(infoLink, linkText);
                infoLink.href = linkHref;
                infoLink.target = "_blank";
                infoLink.style.marginLeft = "8px";
                return infoLink;
            }
            function _dismissLinkClick() {
                _saveUserPreference();
                _removeCookieConsent();
                return !1;
            }
            function _showCookieConsent(cookieText, dismissText, linkText, linkHref, isDialog) {
                if (_shouldDisplayConsent()) {
                    _removeCookieConsent();
                    var consentElement = isDialog ? _createDialogElement(cookieText, dismissText, linkText, linkHref) : _createHeaderElement(cookieText, dismissText, linkText, linkHref);
                    var fragment = document.createDocumentFragment();
                    fragment.appendChild(consentElement);
                    document.body.appendChild(fragment.cloneNode(!0));
                    document.getElementById(dismissLinkId).onclick = _dismissLinkClick;
                }
            }

            function displayCookieConsentBar () {
                let consentElement = document.getElementById(cookieConsentId)
                if (_shouldDisplayConsent()) {
                    if (consentElement.classList.contains('d-none')) {
                        consentElement.classList.remove('d-none');
                    }
                    let consentElements = document.getElementById(cookieConsentId)

                    document.getElementById('cookiesClose').onclick = _dismissLinkClick;
                } else {
                    _removeCookieConsent();
                }
            }

            function showCookieConsentBar(cookieText, dismissText, linkText, linkHref) {
                _showCookieConsent(cookieText, dismissText, linkText, linkHref, !1);
            }
            function showCookieConsentDialog(cookieText, dismissText, linkText, linkHref) {
                _showCookieConsent(cookieText, dismissText, linkText, linkHref, !0);
            }
            function _removeCookieConsent() {
                var cookieChoiceElement = document.getElementById(cookieConsentId);
                if (cookieChoiceElement != null) {
                    cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
                }
            }
            function _saveUserPreference() {
                var expiryDate = new Date();
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
                document.cookie = cookieName + "=y; expires=" + expiryDate.toGMTString() + "; path=/";
            }
            function _shouldDisplayConsent() {
                return !document.cookie.match(new RegExp(cookieName + "=([^;]+)"));
            }
            var exports = {};
            exports.showCookieConsentBar = showCookieConsentBar;
            exports.showCookieConsentDialog = showCookieConsentDialog;
            exports.displayCookieConsentBar = displayCookieConsentBar;
            return exports;
        })();
        window.cookieChoices = cookieChoices;
        return cookieChoices;
    })(this);
    $(function () {
        $("#menuBt").click(function () {
            $("#menu").slideToggle("fast");
        });
        $("#menu li").click(function () {
            $(this).attr("id", "menu_current");
        });
        if ($("#new-search")) {
            $("#new-search-form").hide();
            $("#new-search").click(function () {
                $("#new-search-form").slideToggle("slow");
            });
        }
    });
    $(function () {
        var button = $("#loginButton");
        var box = $("#loginBox");
        var form = $("#loginForm");
        button.removeAttr("href");
        button.mouseup(function (login) {
            box.toggle();
            button.toggleClass("active");
        });
        form.mouseup(function () {
            return !1;
        });
        $(this).mouseup(function (login) {
            if (!($(login.target).parent("#loginButton").length > 0)) {
                button.removeClass("active");
                box.hide();
            }
        });
    });

    cookieChoices.displayCookieConsentBar();

}