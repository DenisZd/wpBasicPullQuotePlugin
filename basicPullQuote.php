<?php
/*
Plugin Name: Basic Pull Quotes
Plugin URI:  
Description: Add styled pull quotes to your posts
Version:     0.α
Author:      Denis Zdanovsky
Author URI:  https://www.istaridevelopment.com
 */
 
add_action( 'wp_enqueue_scripts', 'istariBasicPullQuoteStyles' );
add_action( 'init', 'istariInitButtons' );

function istariBasicPullQuoteStyles()
{
    wp_register_style( 'basicPullQuoteStyles', plugins_url( '/basicPullQuote.css', __FILE__ ));
    wp_enqueue_style('basicPullQuoteStyles');
}

function istariInitButtons()
{
    add_filter("mce_external_plugins", "istariAddButtons");
    add_filter('mce_buttons', 'istariRegButtons');
}
function istariAddButtons($plugin_array)
{
    $plugin_array['istariBasicPullQuotes'] = plugins_url('basicPullQuote.js', __FILE__);
    return $plugin_array;
}
function istariRegButtons($buttons)
{
    array_push($buttons, 'pullQuoteMenu');
    return $buttons;
}
