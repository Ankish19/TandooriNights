/* eslint-disable */
<template>
  <div class="cardpayment">
    <Headbar></Headbar>
    <div id="card-payment" class="text-center float-center">
      <div class="container text-center float-center">
        <div class="card-container">
          <div class="card--credit__card">
            <div class="front">
              <div class="Cheader">
                <div class="card__logo">
                  <img
                    v-bind:class="cClass"
                    :src="
                      cardType
                        ? cardType
                        : 'https://tandoorinights.ca/img/logo.94138760.svg'
                    "
                    alt=""
                  />
                </div>
                <div class="card__chip">
                  <svg x="0px" y="0px" viewBox="0 0 100 125">
                    <g transform="translate(0,-952.36218)">
                      <path
                        d="M 18,18 C 11.869627,18 7,23.41809 7,30 l 0,40 c 0,6.5819 4.869627,12 11,12 21.333333,0 42.666667,0 64,0 6.130373,0 11,-5.4181 11,-12 L 93,30 C 93,23.41809 88.130373,18 82,18 60.666667,18 39.333333,18 18,18 z m 0,2 23.46875,0 C 37.589245,22.564948 35,27.361832 35,33 l 0,4.6875 C 34.069867,37.259411 33.060307,37 32,37 L 9,37 9,30 c 0,-5.60609 4.050373,-10 9,-10 z m 30,0 4,0 c 6.043676,0 11,5.47378 11,13 0,2.009661 0,4.023816 0,6.03125 -0.251164,0.237363 -0.495555,0.475252 -0.71875,0.75 C 60.845717,41.54836 60,44.04215 60,47 l 0,5 c 0,2.9578 0.845717,5.4204 2.28125,7.1875 C 62.508873,59.467697 62.743321,59.757384 63,60 l 0,7 c 0,7.5263 -4.956311,13 -11,13 l -4,0 C 41.956311,80 37,74.5263 37,67 l 0,-7 c 0.256679,-0.242616 0.491127,-0.532303 0.71875,-0.8125 C 39.154283,57.4204 40,54.9578 40,52 l 0,-5 C 40,44.04215 39.154283,41.54836 37.71875,39.78125 37.491127,39.501051 37.256679,39.241295 37,39 l 0,-6 C 37,25.47378 41.956324,20 48,20 z M 58.53125,20 82,20 c 4.949627,0 9,4.39391 9,10 l 0,7 -23,0 c -1.060307,0 -2.069867,0.259411 -3,0.6875 L 65,33 C 65,27.361832 62.410755,22.564948 58.53125,20 z M 9,39 32,39 c 1.641597,0 3.092532,0.68336 4.1875,2.03125 C 37.282468,42.37914 38,44.41785 38,47 l 0,5 c 0,2.5822 -0.717532,4.5896 -1.8125,5.9375 C 35.092532,59.2854 33.641597,60 32,60 L 9,60 z m 59,0 23,0 0,21 -23,0 C 66.358403,60 64.907468,59.2854 63.8125,57.9375 62.717532,56.5896 62,54.5822 62,52 l 0,-5 c 0,-2.58215 0.717532,-4.62086 1.8125,-5.96875 C 64.907468,39.68336 66.358403,39 68,39 z M 35,61.34375 35,67 c 0,5.625803 2.572319,10.430848 6.4375,13 L 18,80 C 13.050373,80 9,75.6061 9,70 l 0,-8 23,0 c 1.060307,0 2.069867,-0.220772 3,-0.65625 z m 30,0 C 65.930133,61.779228 66.939693,62 68,62 l 23,0 0,8 c 0,5.6061 -4.050373,10 -9,10 L 58.5625,80 C 62.427681,77.430848 65,72.625803 65,67 z"
                        transform="translate(0,952.36218)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div class="Cbody">
                <p>{{ cardNumber }}</p>
              </div>
              <div class="Cfooter">
                <div class="name">
                  <span>CARD HOLDER</span>
                  <p>{{ cardHolder }}</p>
                </div>
                <div class="expiration__data">
                  <span>EXPIRES</span>
                  <p v-if="monthSelection">
                    {{ monthSelection }} / {{ yearSelection }}
                  </p>
                </div>
              </div>
            </div>
            <div class="back">
              <div class="strip"></div>
              <div class="cvv-container">
                <p>cvv: {{ cvv }}</p>
                <div class="cvv-strip"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="card--form">
          <form>
            <label for="cardNumber">Card Number</label>
            <input
              v-on:keyup="inputFormat()"
              v-model="cardNumber"
              maxlength="19"
              type="text"
              id="cardNumber"
            />
            <label for="cardName">Card Name</label>
            <input
              v-model="cardHolder"
              maxlength="25"
              type="text"
              id="cardName"
            />
            <div class="date--expiration">
              <div>
                <select v-model="monthSelection" name="expirationDate__month">
                  <option value="">Month</option>
                  <option
                    v-for="item in Months"
                    :key="item.month"
                    :value="item.month"
                  >
                    {{ item.month }}
                  </option>
                </select>
                <select v-model="yearSelection" name="expirationDate__year">
                  <option value="">Year</option>
                  <option
                    v-for="item in years"
                    :key="item.year"
                    :value="item.year"
                  >
                    {{ item.year }}
                  </option>
                </select>
              </div>
              <div class="cvv">
                <label for="cvvInput" class="mr-2">CVV</label>
                <input
                  v-model="cvv"
                  maxlength="4"
                  type="text"
                  id="cvvInput"
                  @focus="fcs()"
                  @blur="blr()"
                />
              </div>
            </div>
            <div class="zipcode w-100">
              <label for="cardNumber" class="texalign">Zip Code</label>
              <input
                type="text"
                v-model="zipCode"
                id="zipcode"
                class="btn-size mb-2"
              />
            </div>
            <div class="continer">
              <div class="row">
                <button
                  type="button"
                  @mousedown="mouseDw"
                  @mouseup="mouseUp"
                  :class="btnClassName"
                  @click="createCard()"
                  class="btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Headbar from "@/views/layouts/Headbar.vue";
import Footer from "@/views/layouts/Footer.vue";
import axios from "axios";
import { getLocalStorage } from '@/store/service'
import { cloverApiPayment } from '../store/api';
import { saveLocalStorage } from "../store/service";
export default {
  name: "cardpayment",
  components: {
    Headbar,
    Footer,
  },
  data() {
    return {
      Months: [
        { month: "0" + 1 },
        { month: "0" + 2 },
        { month: "0" + 3 },
        { month: "0" + 4 },
        { month: "0" + 5 },
        { month: "0" + 6 },
        { month: "0" + 7 },
        { month: "0" + 8 },
        { month: "0" + 9 },
        { month: 10 },
        { month: 11 },
        { month: 12 },
      ],
      years: [],
      //selection options
      monthSelection: "",
      yearSelection: "",
      timeToExpire: 9,
      //formated cardNumber
      cardNumber: "",
      //non formated
      cardVadid: 0,
      //card type
      cardType: "",
      //card class to manipulate on css
      cClass: "",
      cvv: "",
      zipCode: "",
      cardHolder: "",
      regx: [
        {
          name: "Visa",
          logo: "https://seeklogo.com/images/V/visa-logo-CF29426B98-seeklogo.com.png",
          re: "^4",
        },
        {
          name: "Hipercard",
          logo: "https://cdn.worldvectorlogo.com/logos/hipercard.svg",
          re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        },
        {
          name: "MasterCard",
          logo: "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-novo-3.png",
          re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
        },
        {
          name: "Discover",
          logo: "https://i.pinimg.com/originals/b3/d7/85/b3d7853a11dcc8c424866915ddd4d3e3.png",
          re: /^(6011|65|64[4-9]|622)/,
        },
        {
          name: "Elo",
          logo: "https://seeklogo.com/images/E/elo-logo-0B17407ECC-seeklogo.com.png",
          re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
        },
        {
          name: "American Express",
          logo: "https://ccard-generator.com/assets/images/cardmedium/american-express.png",
          re: /^3[47]\d{13,14}$/,
        },
      ],
      btnClassName: "",
    };
  },
  methods: {
    //4 in 4 spaces on input format
    inputFormat() {
      let text = this.cardNumber.split(" ").join("");
      //this.cardVdid is not formated in 4 spaces
      this.cardVadid = text;
      if (text.length > 0) {
        //regExp 4 in 4 number add an space between
        text = text
          .match(new RegExp(/.{1,4}/, "g"))
          .join(" ")
          //accept only numbers
          .replace(new RegExp(/[^\d]/, "ig"), " ");
      }
      //this.cardNumber is formated on 4 spaces
      this.cardNumber = text;
      //after formatd they callback cardType for choose a type of the card
      this.GetCardType(this.cardVadid);
    },
    //loop for the next 9 years for expire data on credit card
    expirationDate() {
      let yearNow = new Date().getFullYear();
      for (let i = yearNow; i < yearNow + this.timeToExpire; i++) {
        this.years.push({ year: i });
      }
    },
    validCreditCard(value) {
      let inputValidate = document.getElementById("cardNumber");
      // luhn algorithm
      let numCheck = 0,
        bEven = false;
      value = value.toString().replace(new RegExp(/\D/g, ""));
      for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n),
          digit = parseInt(cDigit, 10);

        if (bEven && (digit *= 2) > 9) digit -= 9;
        numCheck += digit;
        bEven = !bEven;
      }
      let len = value.length;
      //true: return valid number
      //this.cardType return true if have an valid number on regx array
      if (numCheck % 10 === 0 && len === 16 && this.cardType) {
        inputValidate.classList.remove("notValid");
        inputValidate.classList.add("valid");
      }
      //false: return not valid number
      else if (!numCheck % 10 === 0 && len === 16) {
        inputValidate.classList.remove("valid");
        inputValidate.classList.add("notValid");
        //if not have number on input
      } else {
        inputValidate.classList.remove("valid");
        inputValidate.classList.remove("notValid");
      }
    },
    //get the name of the card name
    GetCardType(number) {
      this.regx.forEach((item) => {
        if (number.match(item.re) != null) {
          this.cardType = item.logo;
          //cClass add a class with the name of cardName to manipulate with css
          this.cClass = item.name.toLowerCase();
        } else if (!number) {
          this.cardType = "";
          this.cClass = "";
        }
      });
      //after choose a cardtype return the number for the luhn algorithm
      this.validCreditCard(number);
    },
    //mouse down on btn
    mouseDw() {
      this.btnClassName = "btn__active";
    },
    //mouse up on btn
    mouseUp() {
      this.btnClassName = "";
    },
    blr() {
      let cr = document.getElementsByClassName("card--credit__card")[0];
      cr.classList.remove("cvv-active");
    },
    fcs() {
      let cr = document.getElementsByClassName("card--credit__card")[0];
      cr.classList.add("cvv-active");
    },

    //-----------payment
    createCard() {

      let amount = getLocalStorage('submitOrder').total.totalPrice;
      let email = getLocalStorage('submitOrder').user.data.email;
        const card= {
            number: this.cardVadid,
            exp_month: this.monthSelection,
            exp_year: this.yearSelection,
            cvv: this.cvv,
            last4: this.cardVadid.substr(this.cardVadid.length - 4),
            first6: this.cardVadid.slice(0, 6),
            country: 'ca',
            brand: this.cClass,
            name: this.cardHolder,
            address_zip: this.zipCode,
            amount: amount.toFixed(2),
            email: email
          }

      cloverApiPayment({card: card})
      .then((res)=> {
        // console.log(res.data);
        const response = res.data
        if(response.res.paid === true && response.res.status === 'succeeded'){
          const securityToken = {
            token: response.res.id,
            id: Math.random().toString(15).slice(2)
          }
          saveLocalStorage('securityToken', JSON.stringify(securityToken))
          this.$router.push('/success/'+response.res.id+'/'+securityToken.id)
        }
        else{
          this.$router.push('/failure')
        }
      })
      .catch((err) => {
        // console.log(err.response.data);
        const error = err.response.data
        if(error.status === 'error'){
          this.$toast.error(error.error.message, {
            timeout: 1000
          })
        }
      })
    }
  },
  mounted() {
    if (
      !getLocalStorage('submitOrder') &&
      !getLocalStorage('submitOrder').method === 'Clover'
    ) {
      this.$router.push('/menu')
    }
  },
  beforeMount() {
    //get date for options on html
    this.expirationDate();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
#card-payment {
  //   .card {
  //     width: 100%;
  //     height: 90vh;
  //     position: absolute;
  //     left: 50%;
  //     top: 50%;
  //     transform: translate(-50%, -50%);
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }
  padding-top: 100px;

  .card--credit__card {
    width: 350px;
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(to bottom, #575757 0%, #000000 100%);
    background-size: cover;
    position: relative;
    z-index: 2;
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .card--form {
    width: 430px;
    height: 540px;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .text-center {
    display: flex;
    justify-content: center !important;
  }

  .card--form {
    width: 30em;
    height: 40rem;
    margin-top: 5rem !important;
  }

  .text-center {
    display: flex;
    justify-content: center !important;
  }

  .card--form {
    width: 30em;
    height: 40rem;
    margin-top: 5rem !important;
  }

  form {
    width: 100%;
    height: 73%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 13px;
  }

  form input {
    width: 90%;
    height: 36px;
    border: 2px solid #ccc;
    outline: none;
    border-radius: 5px;
    padding-left: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  label {
    padding: 15px 0px 0px 20px;
    color: #595959;
  }

  form input:focus {
    box-shadow: 0 0 5px #d4eafd;
    border-color: #4bdee5;
  }

  .date--expiration {
    width: 90%;
    height: 50px;
    margin: 20px 0px 0px 0px;
    padding: 0px 5px 0px 5px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .date--expiration input {
    width: 100px;
  }

  select {
    width: 100px;
    height: 33px;
    border: 2px solid #ccc;
    outline: none;
    border-radius: 5px;
  }

  .card__logo {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    pointer-events: none;
    margin-right: 5px;
    margin-top: 5px;
  }

  img {
    width: 60px;
    height: 40px;
    user-select: none;
  }

  .visa {
    width: 58px;
    height: 25px;
  }

  .elo {
    height: 27px;
  }

  .Cheader {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row-reverse;
  }

  .card__chip {
    width: 55px;
    height: 40px;
    background: #d4af37;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin-left: 5px;
    margin-top: 5px;
  }

  .card__chip svg {
    width: 58px;
    height: 80px;
    position: relative;
    top: 7px;
  }

  .Cbody {
    width: 100%;
    height: 33px;
    position: absolute;
    bottom: 40%;
    display: flex;
    align-items: center;
  }

  .Cbody p {
    font-size: 30px;
    margin-left: 8%;
    color: white;
  }

  .Cfooter {
    width: 95%;
    height: 33px;
    position: absolute;
    bottom: 6%;
    margin-left: 5px;
    display: flex;
    align-items: center;
  }

  .Cfooter .name {
    width: 70%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .name p {
    position: absolute;
    left: 0;
    top: 0;
    top: 12px !important;
  }

  .name span {
    font-size: 10px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .expiration__data {
    width: 30%;
    height: 100%;
    color: white;
  }

  .expiration__data p {
    position: absolute;
    right: 0;
    top: 12px !important;
  }

  .expiration__data span {
    font-size: 10px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .btn {
    width: 90%;
    height: 45px;
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-radius: 4px;
    background: #2e2e2e;
    box-shadow: 3px 10px 20px 0px rgba(0, 0, 0, 0.3);
    font-size: 20px;
    color: white;
    transition: 0.1s ease;
    cursor: pointer;
    outline: none;
  }

  .btn__active {
    bottom: 6%;
    left: 49%;
  }

  .card-container {
    position: relative;
    width: 350px;
    height: 200px;
    z-index: 2;
    left: 0px;
    top: 0px;
  }

  .card--credit__card {
    position: absolute;
    transition: 1s ease;
    transform-style: preserve-3d;
  }

  .cvv-active {
    transform: rotateY(180deg);
  }

  .front {
    width: 350px;
    height: 200px;
  }

  .front,
  .back {
    position: absolute;
    backface-visibility: hidden;
  }

  .back {
    width: 350px;
    height: 200px;
    color: white;
    transform: rotateY(180deg);
    border-radius: 10px;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtX-QkYwDKEXw_jriWgI5vplXUadOusPHRitOZKZCfBqJqK7IU");
    background-size: cover;
    z-index: 2;
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .strip {
    width: 100%;
    height: 40px;
    background: linear-gradient(135deg, #404040, #1a1a1a);
    position: relative;
    top: 25px;
  }

  .cvv-container {
    width: 90%;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .cvv-container p {
    z-index: 2;
    position: absolute;
    left: 65%;
    top: 25%;
    color: black;
    margin: 0;
  }

  .cvv-container .cvv-strip {
    width: 100%;
    height: 35px;
    background: white;
    position: absolute;
    top: 5%;
  }

  .valid {
    border-color: #4bb54380;
    box-shadow: 0 0 2px #4bb54380;
    background: #4bb54310;
  }

  .valid:focus {
    border-color: #4bb54310;
    box-shadow: 0 0 2px #4bb543;
  }

  .notValid {
    border-color: #d8000c;
    box-shadow: 0 0 2px #d8000c;
    background: #d800bb10;
  }

  .notValid:focus {
    border-color: #d8000c;
    box-shadow: 0 0 2px #d8000c;
    background: #d800bb10;
  }

  img {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  input#zipcode {
    margin: auto;
    position: relative;
    left: 0px;
  }
  label.texalign {
    text-align: left;
    position: relative;
    right: 40%;
  }
  @media screen and (max-width: 480px) {
    select {
      width: auto;
      height: 33px;
      border: 2px solid #ccc;
      outline: none;
      border-radius: 5px;
      padding-left: 14px;
      margin-right: 17px;
    }
  }
}
</style>
