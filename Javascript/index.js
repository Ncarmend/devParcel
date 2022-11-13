import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'
import mapboxgl from "mapbox-gl";

const adressForm = document.getElementById("adressform");

adressForm.addEventListener("submit", (event) => {
    event.preventDefault();

    mapboxgl.accessToken =
        "pk.eyJ1IjoibXliZWNvZGUiLCJhIjoiY2xhYjZxanNoMGV5ZDNzbXYzcWxjZjlnZSJ9.jis9myPC1a57FHAKtLdmpA";
    const map = new mapboxgl.Map({
        container: "map", // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 18, // starting zoom
        projection: "globe", // display the map as a 3D globe
    });

    map.on("style.load", () => {
        map.setFog({}); // Set the default atmosphere style
    });
});