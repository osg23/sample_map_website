var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_obsmap_1 = new ol.format.GeoJSON();
var features_obsmap_1 = format_obsmap_1.readFeatures(json_obsmap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_obsmap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obsmap_1.addFeatures(features_obsmap_1);
var lyr_obsmap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_obsmap_1, 
                style: style_obsmap_1,
                interactive: true,
                title: '<img src="styles/legend/obsmap_1.png" /> obs map'
            });
var format_Routes_2 = new ol.format.GeoJSON();
var features_Routes_2 = format_Routes_2.readFeatures(json_Routes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_2.addFeatures(features_Routes_2);
var lyr_Routes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_2, 
                style: style_Routes_2,
                interactive: true,
    title: 'Routes<br />\
    <img src="styles/legend/Routes_2_0.png" /> R 14.23<br />\
    <img src="styles/legend/Routes_2_1.png" /> R 17.44<br />\
    <img src="styles/legend/Routes_2_2.png" /> R 36.43<br />\
    <img src="styles/legend/Routes_2_3.png" /> <br />'
        });
var format_Pick_ups_3 = new ol.format.GeoJSON();
var features_Pick_ups_3 = format_Pick_ups_3.readFeatures(json_Pick_ups_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pick_ups_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pick_ups_3.addFeatures(features_Pick_ups_3);
var lyr_Pick_ups_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pick_ups_3, 
                style: style_Pick_ups_3,
                interactive: true,
                title: '<img src="styles/legend/Pick_ups_3.png" /> Pick_ups'
            });
var format_Deliveries_4 = new ol.format.GeoJSON();
var features_Deliveries_4 = format_Deliveries_4.readFeatures(json_Deliveries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deliveries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deliveries_4.addFeatures(features_Deliveries_4);
var lyr_Deliveries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deliveries_4, 
                style: style_Deliveries_4,
                interactive: true,
                title: '<img src="styles/legend/Deliveries_4.png" /> Deliveries'
            });

lyr_OSMStandard_0.setVisible(true);lyr_obsmap_1.setVisible(true);lyr_Routes_2.setVisible(true);lyr_Pick_ups_3.setVisible(true);lyr_Deliveries_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_obsmap_1,lyr_Routes_2,lyr_Pick_ups_3,lyr_Deliveries_4];
lyr_obsmap_1.set('fieldAliases', {'fid': 'fid', 'ADR_NO': 'ADR_NO', 'Full_address': 'Full_address', });
lyr_Routes_2.set('fieldAliases', {'fid': 'fid', 'DEL_cost': 'DEL_cost', 'RID': 'RID', });
lyr_Pick_ups_3.set('fieldAliases', {'PID': 'PID', 'P_ADDRESS': 'P_ADDRESS', 'D_ADDRESS': 'D_ADDRESS', });
lyr_Deliveries_4.set('fieldAliases', {'DID': 'DID', 'D_ADDRESS': 'D_ADDRESS', });
lyr_obsmap_1.set('fieldImages', {'fid': 'TextEdit', 'ADR_NO': 'Range', 'Full_address': 'TextEdit', });
lyr_Routes_2.set('fieldImages', {'fid': 'TextEdit', 'DEL_cost': 'TextEdit', 'RID': '', });
lyr_Pick_ups_3.set('fieldImages', {'PID': 'TextEdit', 'P_ADDRESS': '', 'D_ADDRESS': 'TextEdit', });
lyr_Deliveries_4.set('fieldImages', {'DID': 'TextEdit', 'D_ADDRESS': 'TextEdit', });
lyr_obsmap_1.set('fieldLabels', {'fid': 'header label', 'ADR_NO': 'header label', 'Full_address': 'header label', });
lyr_Routes_2.set('fieldLabels', {'fid': 'header label', 'DEL_cost': 'header label', 'RID': 'header label', });
lyr_Pick_ups_3.set('fieldLabels', {'PID': 'header label', 'P_ADDRESS': 'header label', 'D_ADDRESS': 'header label', });
lyr_Deliveries_4.set('fieldLabels', {'DID': 'no label', 'D_ADDRESS': 'header label', });
lyr_Deliveries_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});