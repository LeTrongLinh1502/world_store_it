<script setup>
import {onMounted, ref} from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "vue-router";

const router = useRouter();
const products = ref([]);
const loading = ref(true);
const error = ref(null);

const getAllProduct = async () => {
  try {
    const response = await fetch("http://tronglinhnevergiveup.online:8085/api/v1/product");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("response data:", data);
    products.value = data;
  } catch (err) {
    error.value = "Lỗi khi lấy dữ liệu!";
    console.error(err);
  } finally {
    loading.value = false;
  }
};
async function deleteProduct(productId) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    await fetch(`http://tronglinhnevergiveup.online:8085/api/v1/product/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
        .then(response => {
          if (response.ok && response) {
            alert("Sản phẩm đã được xóa thành công!");
            location.reload(); // Reload lại trang sau khi xóa
          } else {
            alert("Xóa sản phẩm thất bại!");
          }
        })
        .catch(error => console.error("Lỗi:", error));
  }
}

function navigateToUpdate(product) {
  router.push({
    name: "UpsertProduct",
    query: {
      id: product.id,
      name: product.name,
      main_image: product.main_image,
      secondary_image: product.secondary_image,
      price: product.price,
      original_price: product.original_price,
    },
    state: { productData: product }, // Truyền data qua state
  });
}
onMounted(getAllProduct);
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
                  <a href="/upsert_product" class="text-right right">Add products<i class="fa fa-add" aria-hidden="true"></i></a>
                </div>
                <ul class="grid-uniform loadItems">
                  <li v-for="product in products" :key="product.id" class="grid__item item-row  wide--one-quarter post-large--one-quarter large--one-third medium--one-half small--grid-item four_ppr on-sale"
                      id="product-12558086795">
                    <div class="products wow animated fadeIn">
                      <div class="product-container">
                        <a href="#" class="grid-link">
                          <div class="featured-tag">
                            <span class="badge badge--sale">
                              <span class="gift-tag badge__text">Sale</span>
                            </span>
                          </div>
                          <div class="ImageOverlayCa"></div>
                          <div class="reveal">
                            <span class="product-additional">
                              <img :src="product.main_image" class="featured-image" alt="main image">
                            </span>
                              <img :src="product.secondary_image" class="hidden-feature_img" alt="secondary image"/>
                          </div>
                        </a>
                        <div class="product_right_tag   offer_exist ">

                        </div>
                        <div class="ImageWrapper">
                          <div class="product-button">
                            <a href="#" @click="deleteProduct(product.id)">
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </a>
                            <a href="#" @click.prevent="navigateToUpdate(product)">
                              <i class="fa fa-rotate" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="product-detail">

                        <a href="#" class="grid-link__title">{{product.name}}</a>

                        <div class="product_left">
                          <div class="grid-link__meta">
                            <div class="product_price">

                              <div class="grid-link__org_price">
                                <span class=money>{{product.price}}</span>
                              </div>

                              <del class="grid-link__sale_price"><span class=money>${{product.original_price}}</span></del>
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
                              <div class="default-wishbutton-a-jean-short loading"><a class="add-in-wishlist-js" href="#">
                                <i class="fa fa-heart"></i><span class="tooltip-label">Wishlist</span></a></div>
                              <div class="loadding-wishbutton-a-jean-short loading"
                                   style="display: none; pointer-events: none"><a class="add_to_wishlist"
                                                                                  href="#"><i
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
.reveal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
}

.featured-image,
.hidden-feature_img {
  width: 350px;
  height: 300px;
  object-fit: cover;
}
</style>