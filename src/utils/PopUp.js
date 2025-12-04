import Swal from "sweetalert2";
import "./PopUp.css"; // we'll add custom CSS below

export function showDisclaimer() {
  Swal.fire({
    title: "Disclaimer",
    html: `
      <p style="margin-bottom: 15px; text-align: left;">
        This website is a design concept and is not a functional e-commerce store.
      </p>

      <p style="margin-bottom: 15px; text-align: left;">
        The website you are experiencing is a design concept created to showcase design capabilities 
        and user experience possibilities.
      </p>

      <p style="margin-bottom: 15px; text-align: left;">
        The functionalities you see, such as adding items to a cart or checking out, are not currently 
        linked to any payment systems or inventory software.
      </p>

      <p style="font-weight: 600; margin-bottom: 15px; text-align: left;">
        This website serves as a portfolio piece and is not intended for commercial use.
      </p>

      <p style="text-align: left;">
        If you wish to buy these products please visit <a href="#" style="text-decoration: underline;">the official store</a>.
      </p>
    `,
    confirmButtonText: "GOT IT!",
    width: "650px",
    padding: "25px",
    showCloseButton: true,
    background: "#fff",
    customClass: {
      popup: "custom-popup",
      confirmButton: "custom-button",
      closeButton: "custom-close",
    },
  });
}
