<script setup>
import { ref } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

const products = ref([
  {
    id: 1,
    name: "Stereo Headset",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img3.jpg?v=1506347682",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/10_70c72b0c-44bf-4fbd-a58c-34128b5caabd.jpg?v=1507292148",
    price: 706.00,
    originalPrice: 750.00
  },
  {
    id: 2,
    name: "Stylish Handbag",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img2.jpg?v=1506347678",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/18.jpg?v=1507291659",
    price: 500.00,
    originalPrice: 600.00
  },
  {
    id: 3,
    name: "Stereo Headset",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img3.jpg?v=1506347682",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/10_70c72b0c-44bf-4fbd-a58c-34128b5caabd.jpg?v=1507292148",
    price: 706.00,
    originalPrice: 750.00,
  },
  {
    id: 4,
    name: "Stylish Handbag",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img2.jpg?v=1506347678",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/18.jpg?v=1507291659",
    price: 500.00,
    originalPrice: 600.00,
  },
  {
    id: 5,
    name: "Stereo Headset",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img3.jpg?v=1506347682",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/10_70c72b0c-44bf-4fbd-a58c-34128b5caabd.jpg?v=1507292148",
    price: 706.00,
    originalPrice: 750.00,
  },
  {
    id: 6,
    name: "Stylish Handbag",
    mainImage: "//quick-shop-01.myshopify.com/cdn/shop/products/img2.jpg?v=1506347678",
    secondaryImage: "//quick-shop-01.myshopify.com/cdn/shop/products/18.jpg?v=1507291659",
    price: 500.00,
    originalPrice: 600.00,
  },
]);
</script>

<template>
  <main class="main-content">
    <div class="container">
      <div class="grid__item">
        <div id="shopify-section-1505986879825" class="shopify-section index-section">
          <div data-section-id="1505986879825" data-section-type="home-product-grid-type-2" class="home-product-grid-type-2">
            <div class="wrapper">
              <div class="full_width_tab load-wrapper">
                <div class="dt-sc-hr-invisible-small"></div>
                <div class="grid__item wide--one-half post-large--one-half large--one-half small--grid-item">
                  <div class="border-title">
                    <h4 class="section-header__title text-left" style="color:#000000">
                      Popular Products
                    </h4>
                  </div>
                </div>
                <div class="grid__item wide--one-half post-large--one-half large--one-half small--grid-item">
                  <a href="" class="text-right right">Add products<i class="fa fa-add" aria-hidden="true"></i></a>
                </div>
                <ul class="grid-uniform loadItems">
                  <li v-for="product in products" :key="product.id" class="grid__item item-row  wide--one-quarter post-large--one-quarter large--one-third medium--one-half small--grid-item four_ppr on-sale"
                      id="product-12558086795">
                    <div class="products wow animated fadeIn">
                      <div class="product-container">
                        <a href="/collections/frontpage/products/a-jean-short" class="grid-link">
                          <div class="featured-tag">
                            <span class="badge badge--sale">
                              <span class="gift-tag badge__text">Sale</span>
                            </span>
                          </div>
                          <div class="ImageOverlayCa"></div>
                          <div class="reveal">
                          <span class="product-additional">
                              <img :src="product.mainImage" class="featured-image" alt="Leather Backpack">
                          </span>
                            <img :src="product.secondaryImage"
                                 class="hidden-feature_img" alt="Leather Backpack"/>
                          </div>
                        </a>
                        <div class="product_right_tag   offer_exist ">

                        </div>
                        <div class="ImageWrapper">
                          <div class="product-button">

                            <a href="/products/a-jean-short">
                              <i class="fa fa-link" aria-hidden="true"></i>
                            </a>

                            <a href="#" class="compare action-home4" data-pid="a-jean-short" title=""
                               data-original-title="Compare product"> <i class="fa fa-chart-simple"></i></a>

                          </div>
                        </div>
                      </div>
                      <div class="product-detail">

                        <a href="/collections/frontpage/products/a-jean-short" class="grid-link__title">{{product.name}}</a>

                        <div class="product_left">
                          <div class="grid-link__meta">
                            <div class="product_price">

                              <div class="grid-link__org_price">
                                <span class=money>{{product.price}}</span>
                              </div>

                              <del class="grid-link__sale_price"><span class=money>${{product.originalPrice}}</span></del>
                            </div>
                          </div>
                        </div>

                        <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-12558086795">
                          <input type="hidden" name="id" value="53524494027"/>
                          <a class="add-cart-btn">
                            <i class="fas fa-shopping-cart"></i>
                          </a>
                        </form>

                        <div class="product_icon_text">

                          <a href="javascript:void(0)" id="a-jean-short" class="quick-view-text">
                            <i class="fas fa-eye" aria-hidden="true"></i>Quick View
                          </a>

                          <div class="add-to-wishlist">
                            <div class="show">
                              <div class="default-wishbutton-a-jean-short loading"><a class="add-in-wishlist-js" href="a-jean-short">
                                <i class="fa fa-heart"></i><span class="tooltip-label">Wishlist</span></a></div>
                              <div class="loadding-wishbutton-a-jean-short loading"
                                   style="display: none; pointer-events: none"><a class="add_to_wishlist"
                                                                                  href="a-jean-short"><i
                                  class="fa fa-circle-o-notch fa-spin"></i></a></div>
                              <div class="added-wishbutton-a-jean-short loading" style="display: none;"><a
                                  class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i
                                  class="fa fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>>
</template>

<style>
</style>