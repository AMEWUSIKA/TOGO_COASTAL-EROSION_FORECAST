ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([310408.895277, 669631.872508, 347687.205834, 699720.363039]);
var wms_layers = [];

var format_bd_infrastructure_0 = new ol.format.GeoJSON();
var features_bd_infrastructure_0 = format_bd_infrastructure_0.readFeatures(json_bd_infrastructure_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_bd_infrastructure_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bd_infrastructure_0.addFeatures(features_bd_infrastructure_0);
var lyr_bd_infrastructure_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bd_infrastructure_0, 
                style: style_bd_infrastructure_0,
                popuplayertitle: "bd_infrastructure",
                interactive: true,
                title: '<img src="styles/legend/bd_infrastructure_0.png" /> bd_infrastructure'
            });
var format_zone_accretion_1 = new ol.format.GeoJSON();
var features_zone_accretion_1 = format_zone_accretion_1.readFeatures(json_zone_accretion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_zone_accretion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_accretion_1.addFeatures(features_zone_accretion_1);
var lyr_zone_accretion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_accretion_1, 
                style: style_zone_accretion_1,
                popuplayertitle: "zone_accretion",
                interactive: true,
                title: '<img src="styles/legend/zone_accretion_1.png" /> zone_accretion'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mesures_protection_3 = new ol.format.GeoJSON();
var features_Mesures_protection_3 = format_Mesures_protection_3.readFeatures(json_Mesures_protection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Mesures_protection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesures_protection_3.addFeatures(features_Mesures_protection_3);
var lyr_Mesures_protection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesures_protection_3, 
                style: style_Mesures_protection_3,
                popuplayertitle: "Mesures_protection",
                interactive: true,
                title: '<img src="styles/legend/Mesures_protection_3.png" /> Mesures_protection'
            });
var format_infrastructure_vulnrable_4 = new ol.format.GeoJSON();
var features_infrastructure_vulnrable_4 = format_infrastructure_vulnrable_4.readFeatures(json_infrastructure_vulnrable_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_vulnrable_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_vulnrable_4.addFeatures(features_infrastructure_vulnrable_4);
var lyr_infrastructure_vulnrable_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastructure_vulnrable_4, 
                style: style_infrastructure_vulnrable_4,
                popuplayertitle: "infrastructure_vulnérable",
                interactive: true,
                title: '<img src="styles/legend/infrastructure_vulnrable_4.png" /> infrastructure_vulnérable'
            });
var format_Zone_dtude_5 = new ol.format.GeoJSON();
var features_Zone_dtude_5 = format_Zone_dtude_5.readFeatures(json_Zone_dtude_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zone_dtude_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_dtude_5.addFeatures(features_Zone_dtude_5);
var lyr_Zone_dtude_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_dtude_5, 
                style: style_Zone_dtude_5,
                popuplayertitle: "Zone_d'étude",
                interactive: true,
                title: '<img src="styles/legend/Zone_dtude_5.png" /> Zone_d\'étude'
            });
var format_TOGO_6 = new ol.format.GeoJSON();
var features_TOGO_6 = format_TOGO_6.readFeatures(json_TOGO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TOGO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOGO_6.addFeatures(features_TOGO_6);
var lyr_TOGO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOGO_6, 
                style: style_TOGO_6,
                popuplayertitle: "TOGO",
                interactive: true,
                title: '<img src="styles/legend/TOGO_6.png" /> TOGO'
            });
var format_Rates_1990_2024_Togo_7 = new ol.format.GeoJSON();
var features_Rates_1990_2024_Togo_7 = format_Rates_1990_2024_Togo_7.readFeatures(json_Rates_1990_2024_Togo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rates_1990_2024_Togo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rates_1990_2024_Togo_7.addFeatures(features_Rates_1990_2024_Togo_7);
var lyr_Rates_1990_2024_Togo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rates_1990_2024_Togo_7, 
                style: style_Rates_1990_2024_Togo_7,
                popuplayertitle: "Rates_1990_2024_Togo",
                interactive: true,
                title: 'Rates_1990_2024_Togo'
            });
var format_infrastructure_risque_8 = new ol.format.GeoJSON();
var features_infrastructure_risque_8 = format_infrastructure_risque_8.readFeatures(json_infrastructure_risque_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_risque_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_risque_8.addFeatures(features_infrastructure_risque_8);
var lyr_infrastructure_risque_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastructure_risque_8, 
                style: style_infrastructure_risque_8,
                popuplayertitle: "infrastructure_risque",
                interactive: true,
                title: '<img src="styles/legend/infrastructure_risque_8.png" /> infrastructure_risque'
            });
var format_zon_risk_2054_9 = new ol.format.GeoJSON();
var features_zon_risk_2054_9 = format_zon_risk_2054_9.readFeatures(json_zon_risk_2054_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_zon_risk_2054_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zon_risk_2054_9.addFeatures(features_zon_risk_2054_9);
var lyr_zon_risk_2054_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zon_risk_2054_9, 
                style: style_zon_risk_2054_9,
                popuplayertitle: "zon_risk_2054",
                interactive: true,
                title: '<img src="styles/legend/zon_risk_2054_9.png" /> zon_risk_2054'
            });
var format_gone_risk_10 = new ol.format.GeoJSON();
var features_gone_risk_10 = format_gone_risk_10.readFeatures(json_gone_risk_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_gone_risk_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gone_risk_10.addFeatures(features_gone_risk_10);
var lyr_gone_risk_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gone_risk_10, 
                style: style_gone_risk_10,
                popuplayertitle: "gone_riské",
                interactive: true,
                title: '<img src="styles/legend/gone_risk_10.png" /> gone_riské'
            });
var format_pre_acre_11 = new ol.format.GeoJSON();
var features_pre_acre_11 = format_pre_acre_11.readFeatures(json_pre_acre_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_pre_acre_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_acre_11.addFeatures(features_pre_acre_11);
var lyr_pre_acre_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_acre_11, 
                style: style_pre_acre_11,
                popuplayertitle: "pre_acre",
                interactive: true,
    title: 'pre_acre<br />\
    <img src="styles/legend/pre_acre_11_0.png" /> Faible<br />\
    <img src="styles/legend/pre_acre_11_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_acre_11_2.png" /> Elevé<br />'
        });
var format_pre_ero_12 = new ol.format.GeoJSON();
var features_pre_ero_12 = format_pre_ero_12.readFeatures(json_pre_ero_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_pre_ero_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pre_ero_12.addFeatures(features_pre_ero_12);
var lyr_pre_ero_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pre_ero_12, 
                style: style_pre_ero_12,
                popuplayertitle: "pre_ero",
                interactive: true,
    title: 'pre_ero<br />\
    <img src="styles/legend/pre_ero_12_0.png" /> Elevé<br />\
    <img src="styles/legend/pre_ero_12_1.png" /> Moyen<br />\
    <img src="styles/legend/pre_ero_12_2.png" /> Faible<br />'
        });
var format_trait_de_cte_2054_13 = new ol.format.GeoJSON();
var features_trait_de_cte_2054_13 = format_trait_de_cte_2054_13.readFeatures(json_trait_de_cte_2054_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_trait_de_cte_2054_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trait_de_cte_2054_13.addFeatures(features_trait_de_cte_2054_13);
var lyr_trait_de_cte_2054_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trait_de_cte_2054_13, 
                style: style_trait_de_cte_2054_13,
                popuplayertitle: "trait_de_côte_2054",
                interactive: true,
                title: '<img src="styles/legend/trait_de_cte_2054_13.png" /> trait_de_côte_2054'
            });
var format_Superficie_2054_14 = new ol.format.GeoJSON();
var features_Superficie_2054_14 = format_Superficie_2054_14.readFeatures(json_Superficie_2054_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_2054_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_2054_14.addFeatures(features_Superficie_2054_14);
var lyr_Superficie_2054_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_2054_14, 
                style: style_Superficie_2054_14,
                popuplayertitle: "Superficie_2054",
                interactive: true,
    title: 'Superficie_2054<br />\
    <img src="styles/legend/Superficie_2054_14_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_2054_14_1.png" /> erosion<br />'
        });
var format_Superficie_2024_15 = new ol.format.GeoJSON();
var features_Superficie_2024_15 = format_Superficie_2024_15.readFeatures(json_Superficie_2024_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_2024_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_2024_15.addFeatures(features_Superficie_2024_15);
var lyr_Superficie_2024_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_2024_15, 
                style: style_Superficie_2024_15,
                popuplayertitle: "Superficie_2024",
                interactive: true,
    title: 'Superficie_2024<br />\
    <img src="styles/legend/Superficie_2024_15_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_2024_15_1.png" /> erosion<br />'
        });
var format_Superficie_1990_16 = new ol.format.GeoJSON();
var features_Superficie_1990_16 = format_Superficie_1990_16.readFeatures(json_Superficie_1990_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Superficie_1990_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficie_1990_16.addFeatures(features_Superficie_1990_16);
var lyr_Superficie_1990_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficie_1990_16, 
                style: style_Superficie_1990_16,
                popuplayertitle: "Superficie_1990",
                interactive: true,
    title: 'Superficie_1990<br />\
    <img src="styles/legend/Superficie_1990_16_0.png" /> accretion<br />\
    <img src="styles/legend/Superficie_1990_16_1.png" /> erosion<br />'
        });
var format_PAL_17 = new ol.format.GeoJSON();
var features_PAL_17 = format_PAL_17.readFeatures(json_PAL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_PAL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAL_17.addFeatures(features_PAL_17);
var lyr_PAL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAL_17, 
                style: style_PAL_17,
                popuplayertitle: "PAL",
                interactive: true,
                title: '<img src="styles/legend/PAL_17.png" /> PAL'
            });
var format_Rate_2001_2014_18 = new ol.format.GeoJSON();
var features_Rate_2001_2014_18 = format_Rate_2001_2014_18.readFeatures(json_Rate_2001_2014_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_2001_2014_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2001_2014_18.addFeatures(features_Rate_2001_2014_18);
var lyr_Rate_2001_2014_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2001_2014_18, 
                style: style_Rate_2001_2014_18,
                popuplayertitle: "Rate_2001_2014",
                interactive: true,
                title: 'Rate_2001_2014'
            });
var format_Rate_2014_2024_19 = new ol.format.GeoJSON();
var features_Rate_2014_2024_19 = format_Rate_2014_2024_19.readFeatures(json_Rate_2014_2024_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_2014_2024_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_2014_2024_19.addFeatures(features_Rate_2014_2024_19);
var lyr_Rate_2014_2024_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_2014_2024_19, 
                style: style_Rate_2014_2024_19,
                popuplayertitle: "Rate_2014_2024",
                interactive: true,
                title: 'Rate_2014_2024'
            });
var format_Rate_1990_2001_20 = new ol.format.GeoJSON();
var features_Rate_1990_2001_20 = format_Rate_1990_2001_20.readFeatures(json_Rate_1990_2001_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Rate_1990_2001_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rate_1990_2001_20.addFeatures(features_Rate_1990_2001_20);
var lyr_Rate_1990_2001_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rate_1990_2001_20, 
                style: style_Rate_1990_2001_20,
                popuplayertitle: "Rate_1990_2001",
                interactive: true,
                title: 'Rate_1990_2001'
            });
var format_Zonevulnrable_2024_21 = new ol.format.GeoJSON();
var features_Zonevulnrable_2024_21 = format_Zonevulnrable_2024_21.readFeatures(json_Zonevulnrable_2024_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zonevulnrable_2024_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonevulnrable_2024_21.addFeatures(features_Zonevulnrable_2024_21);
var lyr_Zonevulnrable_2024_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonevulnrable_2024_21, 
                style: style_Zonevulnrable_2024_21,
                popuplayertitle: "Zone vulnérable_2024",
                interactive: true,
                title: '<img src="styles/legend/Zonevulnrable_2024_21.png" /> Zone vulnérable_2024'
            });
var format_intersection_2024_22 = new ol.format.GeoJSON();
var features_intersection_2024_22 = format_intersection_2024_22.readFeatures(json_intersection_2024_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_intersection_2024_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersection_2024_22.addFeatures(features_intersection_2024_22);
var lyr_intersection_2024_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersection_2024_22, 
                style: style_intersection_2024_22,
                popuplayertitle: "intersection_2024",
                interactive: true,
                title: '<img src="styles/legend/intersection_2024_22.png" /> intersection_2024'
            });
var format_TC2024_23 = new ol.format.GeoJSON();
var features_TC2024_23 = format_TC2024_23.readFeatures(json_TC2024_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2024_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2024_23.addFeatures(features_TC2024_23);
var lyr_TC2024_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2024_23, 
                style: style_TC2024_23,
                popuplayertitle: "TC 2024",
                interactive: true,
                title: '<img src="styles/legend/TC2024_23.png" /> TC 2024'
            });
var format_TC2014_24 = new ol.format.GeoJSON();
var features_TC2014_24 = format_TC2014_24.readFeatures(json_TC2014_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2014_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2014_24.addFeatures(features_TC2014_24);
var lyr_TC2014_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2014_24, 
                style: style_TC2014_24,
                popuplayertitle: "TC 2014",
                interactive: true,
                title: '<img src="styles/legend/TC2014_24.png" /> TC 2014'
            });
var format_TC2001_25 = new ol.format.GeoJSON();
var features_TC2001_25 = format_TC2001_25.readFeatures(json_TC2001_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC2001_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC2001_25.addFeatures(features_TC2001_25);
var lyr_TC2001_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC2001_25, 
                style: style_TC2001_25,
                popuplayertitle: "TC 2001",
                interactive: true,
                title: '<img src="styles/legend/TC2001_25.png" /> TC 2001'
            });
var format_TC1990_26 = new ol.format.GeoJSON();
var features_TC1990_26 = format_TC1990_26.readFeatures(json_TC1990_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_TC1990_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC1990_26.addFeatures(features_TC1990_26);
var lyr_TC1990_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC1990_26, 
                style: style_TC1990_26,
                popuplayertitle: "TC 1990",
                interactive: true,
                title: '<img src="styles/legend/TC1990_26.png" /> TC 1990'
            });
var group_Traits_cte_ancien = new ol.layer.Group({
                                layers: [lyr_TC2024_23,lyr_TC2014_24,lyr_TC2001_25,lyr_TC1990_26,],
                                fold: "open",
                                title: "Traits_côte_ancien"});
var group_Historiquedrosion = new ol.layer.Group({
                                layers: [lyr_Zonevulnrable_2024_21,lyr_intersection_2024_22,],
                                fold: "open",
                                title: "Historique d'érosion"});
var group_TauxparTransects = new ol.layer.Group({
                                layers: [lyr_Rate_2001_2014_18,lyr_Rate_2014_2024_19,lyr_Rate_1990_2001_20,],
                                fold: "open",
                                title: "Taux par Transects"});
var group_Superfie_perdues = new ol.layer.Group({
                                layers: [lyr_Superficie_2054_14,lyr_Superficie_2024_15,lyr_Superficie_1990_16,],
                                fold: "open",
                                title: "Superfie_perdues"});
var group_Prvisiondrosion = new ol.layer.Group({
                                layers: [lyr_pre_acre_11,lyr_pre_ero_12,lyr_trait_de_cte_2054_13,],
                                fold: "open",
                                title: "Prévision d'érosion"});
var group_Zonesrisque = new ol.layer.Group({
                                layers: [lyr_infrastructure_risque_8,lyr_zon_risk_2054_9,lyr_gone_risk_10,],
                                fold: "open",
                                title: "Zones à risque"});
var group_References = new ol.layer.Group({
                                layers: [lyr_Mesures_protection_3,lyr_infrastructure_vulnrable_4,lyr_Zone_dtude_5,lyr_TOGO_6,],
                                fold: "open",
                                title: "References"});

lyr_bd_infrastructure_0.setVisible(true);lyr_zone_accretion_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Mesures_protection_3.setVisible(true);lyr_infrastructure_vulnrable_4.setVisible(true);lyr_Zone_dtude_5.setVisible(true);lyr_TOGO_6.setVisible(true);lyr_Rates_1990_2024_Togo_7.setVisible(true);lyr_infrastructure_risque_8.setVisible(true);lyr_zon_risk_2054_9.setVisible(true);lyr_gone_risk_10.setVisible(true);lyr_pre_acre_11.setVisible(true);lyr_pre_ero_12.setVisible(true);lyr_trait_de_cte_2054_13.setVisible(true);lyr_Superficie_2054_14.setVisible(true);lyr_Superficie_2024_15.setVisible(true);lyr_Superficie_1990_16.setVisible(true);lyr_PAL_17.setVisible(true);lyr_Rate_2001_2014_18.setVisible(true);lyr_Rate_2014_2024_19.setVisible(true);lyr_Rate_1990_2001_20.setVisible(true);lyr_Zonevulnrable_2024_21.setVisible(true);lyr_intersection_2024_22.setVisible(true);lyr_TC2024_23.setVisible(true);lyr_TC2014_24.setVisible(true);lyr_TC2001_25.setVisible(true);lyr_TC1990_26.setVisible(true);
var layersList = [lyr_bd_infrastructure_0,lyr_zone_accretion_1,lyr_OSMStandard_2,group_References,lyr_Rates_1990_2024_Togo_7,group_Zonesrisque,group_Prvisiondrosion,group_Superfie_perdues,lyr_PAL_17,group_TauxparTransects,group_Historiquedrosion,group_Traits_cte_ancien];
lyr_bd_infrastructure_0.set('fieldAliases', {'id': 'id', 'COMMUNE': 'COMMUNE', 'CANTON': 'CANTON', 'VILLAGE_QU': 'VILLAGE_QU', 'ACTIVITES': 'ACTIVITES', 'SECTEUR': 'SECTEUR', 'TYPE': 'TYPE', 'STATUT': 'STATUT', 'ETAT': 'ETAT', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALTITUDE': 'ALTITUDE', 'field_28': 'field_28', 'field_29': 'field_29', 'Colonne1': 'Colonne1', });
lyr_zone_accretion_1.set('fieldAliases', {'Id': 'Id', });
lyr_Mesures_protection_3.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'ns1_name', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', });
lyr_infrastructure_vulnrable_4.set('fieldAliases', {'creator': 'creator', 'version': 'version', 'lat': 'lat', 'lon': 'lon', 'ns1_name': 'ns1_name', 'ns1_ele': 'ns1_ele', 'ns1_time': 'ns1_time', });
lyr_Zone_dtude_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Noms': 'Village/quartier', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Superficie': 'superficie(km²)', });
lyr_TOGO_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Superficie': 'superficie(km²)', });
lyr_Rates_1990_2024_Togo_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR(m/an)', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_infrastructure_risque_8.set('fieldAliases', {'id': 'id', 'COMMUNE': 'COMMUNE', 'CANTON': 'CANTON', 'VILLAGE_QU': 'village/quartier', 'ACTIVITES': 'Activités', 'SECTEUR': 'secteur', 'TYPE': 'TYPE', 'STATUT': 'STATUT', 'ETAT': 'ETAT', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALTITUDE': 'ALTITUDE', 'field_28': 'field_28', 'field_29': 'field_29', 'Colonne1': 'Secteur', });
lyr_zon_risk_2054_9.set('fieldAliases', {'Id': 'Id', 'nom': 'nom', 'LRR_2054': 'LRR_2054', });
lyr_gone_risk_10.set('fieldAliases', {'Id': 'Id', });
lyr_pre_acre_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_pre_ero_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', });
lyr_trait_de_cte_2054_13.set('fieldAliases', {'Id': 'Id', 'loca': 'loca', });
lyr_Superficie_2054_14.set('fieldAliases', {'Id': 'Id', 'superficie': 'superfcie(km²)', 'type': 'type', });
lyr_Superficie_2024_15.set('fieldAliases', {'Id': 'Id', 'Superficie': 'superficie(km²)', 'Typ_': 'Typ_', });
lyr_Superficie_1990_16.set('fieldAliases', {'Id': 'Id', 'superficie': 'superficie(km²)', 'type': 'type', });
lyr_PAL_17.set('fieldAliases', {'Id': 'Id', });
lyr_Rate_2001_2014_18.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_2014_2024_19.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Rate_1990_2001_20.set('fieldAliases', {'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LSE': 'LSE', 'LCI': 'LCI', 'EPR': 'EPR(m/an)', 'EPRunc': 'EPRunc', 'NSM': 'NSM(m)', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', });
lyr_Zonevulnrable_2024_21.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', 'Taux_éros': 'Taux_éros', });
lyr_intersection_2024_22.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Int_20': 'FID_Int_20', 'OBJECTID_2': 'OBJECTID_2', 'FID_TC_202': 'FID_TC_202', 'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', 'FID_Merge_': 'FID_Merge_', 'ObjectID': 'ObjectID', 'BaselineID': 'BaselineID', 'TransOrder': 'TransOrder', 'TransEdit': 'TransEdit', 'TransectId': 'TransectId', 'ShrCount': 'ShrCount', 'LRR': 'LRR', 'LR2': 'LR2', 'LCI': 'LCI', 'LSE': 'LSE', 'EPR': 'EPR', 'EPRunc': 'EPRunc', 'NSM': 'NSM', 'SCE': 'SCE', 'WLR': 'WLR', 'WR2': 'WR2', 'WCI': 'WCI', 'WSE': 'WSE', 'TCD': 'TCD', 'LRR_2054': 'LRR_2054', 'X': 'X', 'Y': 'Y', 'future_X': 'future_X', 'future_Y': 'future_Y', 'FID_pre_er': 'FID_pre_er', 'ObjectID_3': 'ObjectID_3', 'Baseline_1': 'Baseline_1', 'TransOrd_1': 'TransOrd_1', 'TransEdit_': 'TransEdit_', 'Transect_1': 'Transect_1', 'ShrCount_1': 'ShrCount_1', 'LRR_1': 'LRR_1', 'LR2_1': 'LR2_1', 'LCI_1': 'LCI_1', 'LSE_1': 'LSE_1', 'EPR_1': 'EPR_1', 'EPRunc_1': 'EPRunc_1', 'NSM_1': 'NSM_1', 'SCE_1': 'SCE_1', 'WLR_1': 'WLR_1', 'WR2_1': 'WR2_1', 'WCI_1': 'WCI_1', 'WSE_1': 'WSE_1', 'TCD_1': 'TCD_1', 'LRR_2054_2': 'LRR_2054_2', 'nearest_in': 'nearest_in', 'nearest_di': 'nearest_di', 'angle': 'angle', 'X_2054': 'X_2054', 'Y_2054': 'Y_2054', 'distance_e': 'distance_e', });
lyr_TC2024_23.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2014_24.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC2001_25.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_TC1990_26.set('fieldAliases', {'Id': 'Id', 'Date_': 'Date_', 'Uncertaint': 'Uncertaint', });
lyr_bd_infrastructure_0.set('fieldImages', {'id': '', 'COMMUNE': '', 'CANTON': '', 'VILLAGE_QU': '', 'ACTIVITES': '', 'SECTEUR': '', 'TYPE': '', 'STATUT': '', 'ETAT': '', 'LONGITUDE': '', 'LATITUDE': '', 'ALTITUDE': '', 'field_28': '', 'field_29': '', 'Colonne1': '', });
lyr_zone_accretion_1.set('fieldImages', {'Id': 'Range', });
lyr_Mesures_protection_3.set('fieldImages', {'creator': 'TextEdit', 'version': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'ns1_name': 'TextEdit', 'ns1_ele': 'TextEdit', 'ns1_time': 'TextEdit', });
lyr_infrastructure_vulnrable_4.set('fieldImages', {'creator': 'TextEdit', 'version': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'ns1_name': 'TextEdit', 'ns1_ele': 'TextEdit', 'ns1_time': 'TextEdit', });
lyr_Zone_dtude_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Noms': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Superficie': 'TextEdit', });
lyr_TOGO_6.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'ADM0_FR': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM0_REF': 'Hidden', 'date': 'Hidden', 'validOn': 'Hidden', 'validTo': 'Hidden', 'Superficie': 'TextEdit', });
lyr_Rates_1990_2024_Togo_7.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'TextEdit', 'LR2': 'Hidden', 'LCI': 'Hidden', 'LSE': 'Hidden', 'EPR': 'Hidden', 'EPRunc': 'Hidden', 'NSM': 'Hidden', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_infrastructure_risque_8.set('fieldImages', {'id': 'Hidden', 'COMMUNE': 'Hidden', 'CANTON': 'Hidden', 'VILLAGE_QU': 'TextEdit', 'ACTIVITES': 'TextEdit', 'SECTEUR': 'Hidden', 'TYPE': 'Hidden', 'STATUT': 'Hidden', 'ETAT': 'Hidden', 'LONGITUDE': 'Hidden', 'LATITUDE': 'Hidden', 'ALTITUDE': 'Hidden', 'field_28': 'Hidden', 'field_29': 'Hidden', 'Colonne1': 'TextEdit', });
lyr_zon_risk_2054_9.set('fieldImages', {'Id': 'Range', 'nom': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_gone_risk_10.set('fieldImages', {'Id': 'Range', });
lyr_pre_acre_11.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_pre_ero_12.set('fieldImages', {'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', });
lyr_trait_de_cte_2054_13.set('fieldImages', {'Id': 'Hidden', 'loca': 'Hidden', });
lyr_Superficie_2054_14.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_Superficie_2024_15.set('fieldImages', {'Id': 'Hidden', 'Superficie': 'TextEdit', 'Typ_': 'TextEdit', });
lyr_Superficie_1990_16.set('fieldImages', {'Id': 'Hidden', 'superficie': 'TextEdit', 'type': 'TextEdit', });
lyr_PAL_17.set('fieldImages', {'Id': '', });
lyr_Rate_2001_2014_18.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Rate_2014_2024_19.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Rate_1990_2001_20.set('fieldImages', {'ObjectID': 'Hidden', 'BaselineID': 'Hidden', 'TransOrder': 'Hidden', 'TransEdit': 'Hidden', 'TransectId': 'Hidden', 'ShrCount': 'Hidden', 'LRR': 'Hidden', 'LR2': 'Hidden', 'LSE': 'Hidden', 'LCI': 'Hidden', 'EPR': 'TextEdit', 'EPRunc': 'Hidden', 'NSM': 'TextEdit', 'SCE': 'Hidden', 'WLR': 'Hidden', 'WR2': 'Hidden', 'WCI': 'Hidden', 'WSE': 'Hidden', 'TCD': 'Hidden', });
lyr_Zonevulnrable_2024_21.set('fieldImages', {'Id': 'Range', 'Nom': 'TextEdit', 'Taux_éros': 'TextEdit', });
lyr_intersection_2024_22.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Int_20': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'FID_TC_202': 'TextEdit', 'Id': 'TextEdit', 'Date_': 'TextEdit', 'Uncertaint': 'TextEdit', 'FID_Merge_': 'TextEdit', 'ObjectID': 'TextEdit', 'BaselineID': 'TextEdit', 'TransOrder': 'TextEdit', 'TransEdit': 'TextEdit', 'TransectId': 'TextEdit', 'ShrCount': 'TextEdit', 'LRR': 'TextEdit', 'LR2': 'TextEdit', 'LCI': 'TextEdit', 'LSE': 'TextEdit', 'EPR': 'TextEdit', 'EPRunc': 'TextEdit', 'NSM': 'TextEdit', 'SCE': 'TextEdit', 'WLR': 'TextEdit', 'WR2': 'TextEdit', 'WCI': 'TextEdit', 'WSE': 'TextEdit', 'TCD': 'TextEdit', 'LRR_2054': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'future_X': 'TextEdit', 'future_Y': 'TextEdit', 'FID_pre_er': 'TextEdit', 'ObjectID_3': 'TextEdit', 'Baseline_1': 'TextEdit', 'TransOrd_1': 'TextEdit', 'TransEdit_': 'TextEdit', 'Transect_1': 'TextEdit', 'ShrCount_1': 'TextEdit', 'LRR_1': 'TextEdit', 'LR2_1': 'TextEdit', 'LCI_1': 'TextEdit', 'LSE_1': 'TextEdit', 'EPR_1': 'TextEdit', 'EPRunc_1': 'TextEdit', 'NSM_1': 'TextEdit', 'SCE_1': 'TextEdit', 'WLR_1': 'TextEdit', 'WR2_1': 'TextEdit', 'WCI_1': 'TextEdit', 'WSE_1': 'TextEdit', 'TCD_1': 'TextEdit', 'LRR_2054_2': 'TextEdit', 'nearest_in': 'TextEdit', 'nearest_di': 'TextEdit', 'angle': 'TextEdit', 'X_2054': 'TextEdit', 'Y_2054': 'TextEdit', 'distance_e': 'TextEdit', });
lyr_TC2024_23.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC2014_24.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC2001_25.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_TC1990_26.set('fieldImages', {'Id': 'Range', 'Date_': 'DateTime', 'Uncertaint': 'Range', });
lyr_bd_infrastructure_0.set('fieldLabels', {'id': 'no label', 'COMMUNE': 'no label', 'CANTON': 'no label', 'VILLAGE_QU': 'no label', 'ACTIVITES': 'no label', 'SECTEUR': 'no label', 'TYPE': 'no label', 'STATUT': 'no label', 'ETAT': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'ALTITUDE': 'no label', 'field_28': 'no label', 'field_29': 'no label', 'Colonne1': 'no label', });
lyr_zone_accretion_1.set('fieldLabels', {'Id': 'no label', });
lyr_Mesures_protection_3.set('fieldLabels', {'creator': 'no label', 'version': 'no label', 'lat': 'no label', 'lon': 'no label', 'ns1_name': 'no label', 'ns1_ele': 'no label', 'ns1_time': 'no label', });
lyr_infrastructure_vulnrable_4.set('fieldLabels', {'creator': 'no label', 'version': 'no label', 'lat': 'no label', 'lon': 'no label', 'ns1_name': 'no label', 'ns1_ele': 'no label', 'ns1_time': 'no label', });
lyr_Zone_dtude_5.set('fieldLabels', {'Noms': 'no label', 'Superficie': 'no label', });
lyr_TOGO_6.set('fieldLabels', {'Superficie': 'no label', });
lyr_Rates_1990_2024_Togo_7.set('fieldLabels', {'LRR': 'no label', });
lyr_infrastructure_risque_8.set('fieldLabels', {'VILLAGE_QU': 'no label', 'ACTIVITES': 'no label', 'Colonne1': 'no label', });
lyr_zon_risk_2054_9.set('fieldLabels', {'Id': 'no label', 'nom': 'no label', 'LRR_2054': 'no label', });
lyr_gone_risk_10.set('fieldLabels', {'Id': 'no label', });
lyr_pre_acre_11.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_pre_ero_12.set('fieldLabels', {'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', });
lyr_trait_de_cte_2054_13.set('fieldLabels', {});
lyr_Superficie_2054_14.set('fieldLabels', {'superficie': 'no label', 'type': 'no label', });
lyr_Superficie_2024_15.set('fieldLabels', {'Superficie': 'no label', 'Typ_': 'no label', });
lyr_Superficie_1990_16.set('fieldLabels', {'superficie': 'no label', 'type': 'no label', });
lyr_PAL_17.set('fieldLabels', {'Id': 'no label', });
lyr_Rate_2001_2014_18.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Rate_2014_2024_19.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Rate_1990_2001_20.set('fieldLabels', {'EPR': 'no label', 'NSM': 'no label', });
lyr_Zonevulnrable_2024_21.set('fieldLabels', {'Id': 'no label', 'Nom': 'no label', 'Taux_éros': 'no label', });
lyr_intersection_2024_22.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Int_20': 'no label', 'OBJECTID_2': 'no label', 'FID_TC_202': 'no label', 'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', 'FID_Merge_': 'no label', 'ObjectID': 'no label', 'BaselineID': 'no label', 'TransOrder': 'no label', 'TransEdit': 'no label', 'TransectId': 'no label', 'ShrCount': 'no label', 'LRR': 'no label', 'LR2': 'no label', 'LCI': 'no label', 'LSE': 'no label', 'EPR': 'no label', 'EPRunc': 'no label', 'NSM': 'no label', 'SCE': 'no label', 'WLR': 'no label', 'WR2': 'no label', 'WCI': 'no label', 'WSE': 'no label', 'TCD': 'no label', 'LRR_2054': 'no label', 'X': 'no label', 'Y': 'no label', 'future_X': 'no label', 'future_Y': 'no label', 'FID_pre_er': 'no label', 'ObjectID_3': 'no label', 'Baseline_1': 'no label', 'TransOrd_1': 'no label', 'TransEdit_': 'no label', 'Transect_1': 'no label', 'ShrCount_1': 'no label', 'LRR_1': 'no label', 'LR2_1': 'no label', 'LCI_1': 'no label', 'LSE_1': 'no label', 'EPR_1': 'no label', 'EPRunc_1': 'no label', 'NSM_1': 'no label', 'SCE_1': 'no label', 'WLR_1': 'no label', 'WR2_1': 'no label', 'WCI_1': 'no label', 'WSE_1': 'no label', 'TCD_1': 'no label', 'LRR_2054_2': 'no label', 'nearest_in': 'no label', 'nearest_di': 'no label', 'angle': 'no label', 'X_2054': 'no label', 'Y_2054': 'no label', 'distance_e': 'no label', });
lyr_TC2024_23.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC2014_24.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC2001_25.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC1990_26.set('fieldLabels', {'Id': 'no label', 'Date_': 'no label', 'Uncertaint': 'no label', });
lyr_TC1990_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});