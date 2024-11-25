<template>
  <div>
    <div id='fullscreen-overlay' v-if="sendPopup">
      <div class='pop-up'>
      Вы точно уверены, что хотите отправить письмо?
        <div class='bottom-buttons'>
          <button id='yes-popup' @click="confirmedSendEmail">Да</button>
          <button id='no-popup' @click="removeOverlay">Нет</button>
        </div>
      </div>
    </div>
    <div id='fullscreen-overlay' v-if="erasePopup">
      <div class='pop-up'>
        Вы точно уверены, что хотите стереть все данные?
        <div class='bottom-buttons'>
          <button id='yes-popup' @click="confirmedErase">Да</button>
          <button id='no-popup' @click="removeOverlay">Нет</button>
        </div>
      </div>
    </div>
    <div class="information">Обратная связь</div>
    <div class="secondary-contact-text">Если у вас есть пожелания по улучшению этого сайта, заполните данную форму</div>
    <form id="survey-form" action="mailto:youraddr@domain.com?subject=dsifisdf" method="GET">
      <div class="input-container" id="name-container">
        <label id="name-label" for="name">
          <span class="label-text">Фамилия Имя Отчество</span>
          <input id="name" :class="{ 'invalid-input': invalid['name'], 'valid-input': valid['name'], }" type="text" v-model="formData.name" v-on:change="validateName" v-on:click="displayTip('name')" placeholder="Введите своё имя" required />
        </label>
        <div class='pop-up-tip' v-if="popUpTip['name']"> {{ tips['name'] }} </div>
        <div v-if="invalid['name']" class="overlay overlay-error">
          <div class="content-box error-message">{{errorMessages['name']}}</div>
        </div>
      </div>
      <div class="input-container" id="email-container">
        <label id="email-label"  for="email">
          <span class="label-text">Электронная почта</span>
          <input id="email" :class="{ 'invalid-input': invalid['email'], 'valid-input': valid['email'], }" type="email" v-model="formData.email" v-on:change="validateEmail" v-on:click="displayTip('email')" placeholder="Введите свою почту" required />
        </label>
        <div class='pop-up-tip' v-if="popUpTip['email']"> {{ tips['email'] }} </div>
        <div v-if="invalid['email']" class="overlay overlay-error">
          <div class="content-box error-message">{{errorMessages['email']}}</div>
        </div>
      </div>
      <div class="input-container" id="number-container">
        <label id="number-label" for="number">
          <span class="label-text">Телефон</span>
          <input id="number" :class="{ 'invalid-input': invalid['phone'], 'valid-input': valid['phone'], }" type="text" v-model="formData.phone" v-on:change="validateNumber" v-on:click="displayTip('phone')" placeholder="Введите свой номер телефона" required />
        </label>
        <div class='pop-up-tip' v-if="popUpTip['phone']"> {{ tips['phone'] }} </div>
        <div v-if="invalid['phone']" class="overlay overlay-error">
          <div class="content-box error-message">{{errorMessages['phone']}}</div>
        </div>
      </div>
      <div class="input-container" id="age-container">
        <label id="age-label"  for="age">
          <span class="label-text">Возраст</span>
          <input id="age" :class="{ 'invalid-input': invalid['age'], 'valid-input': valid['age'], }" type="number" min=0 max=150 v-model="formData.age" v-on:click="displayTip('age')" placeholder="Введите свой возраст" required />
        </label>
        <div class='pop-up-tip' v-if="popUpTip['age']"> {{ tips['age'] }} </div>
      </div>
      <div id="myboxes">
        <label>Пол</label>
        <div>
          <label class="check"><input type="radio" name="conditions"  class="radios" value="male"/> Мужской</label>
          <label class="check"><input type="radio" class="radios" name="conditions" value="female"/> Женский</label>
        </div>
      </div>
      <div class="input-container" id="date-container">
        <label id="date-label"  for="date">
          <span class="label-text">Дата рождения</span>
          <input id="date" type="date" :class="{ 'invalid-input': invalid['date'], 'valid-input': valid['date'], }" v-model="formData.date" required/>
        </label>
      </div>

      <div class="input-container" id="text-container">
        <label id="topic-label" for="text">
          <span class="label-text">Тема</span>
          <input name="subject" :class="{ 'invalid-input': invalid['message'], 'valid-input': valid['message'], }" v-on:click="displayTip('message')" v-model="formData.message" id="text" type="text" placeholder="Введите тему письма" required />
        </label>
        <div class='pop-up-tip' v-if="popUpTip['message']"> {{ tips['message'] }} </div>
      </div>
      <label>
        <span class="label-text">Пожелания</span>
        <textarea name="body"></textarea>
      </label>
      <div class="bottom-buttons">
        <button id="but4" type="button" v-on:click="checkForm">Проверить</button>
        <button id="but2" type="submit" v-on:click="sendEmail($event)" ref="but2">Отправить</button>
        <button id="but3" type="reset" v-on:click="erase($event)" ref="but3">Очистить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: {
        name: false,
        email: false,
        phone: false,
        age: false,
        date: false,
        question: false,
        message: false
      },
      invalid: {
        name: false,
        email: false,
        phone: false,
        age: false,
        date: false,
        question: false,
        message: false
      },
      popUpTip: {
        name: false,
        email: false,
        phone: false,
        age: false,
        date: false,
        question: false,
        message: false
      },
      tips: {
        name: "Пример: Иванов Иван Иванович",
        email: "Пример: example@example.com",
        phone: "Пример: +7777777777",
        age: "Положительное число от 1 до 150",
        message: "Пример: Советы по поводу улучшения сайта"
      },
      errorMessages: {
        name: "Необходимо ввести ФИО полностью!",
        email: "Необходимо ввести корректный адрес почты!",
        phone: "Номер должен содержать от 9 до 11 цифр и начинаться с +3 или +7!"
      },
      sendPopup: false,
      erasePopup: false,
      readyToSend: false,
      readyToErase: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        age: 0,
        date: '',
        question: '',
        message: ''
      }
    };
  },
  methods: {
    validateEmailString(email) {
      return String(email)
          .toLowerCase()
          .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    },
    setValid(inputType) {
      this.valid[inputType] = true;
      this.invalid[inputType] = false;
    },
    setInvalid(inputType) {
      this.valid[inputType] = false;
      this.invalid[inputType] = true;
    },
    setValidElements() {
      for (let name in this.valid) {
        this.valid[name] = false;
      }
      for (let name in this.invalid) {
        this.invalid[name] = false;
      }
    },
    validateName() {
      if (this.formData.name.split(" ").length!==3) {
        this.setInvalid('name');
        return false;
      }
      this.setValid('name');
      return true;
    },
    validateEmail() {
      if (!this.validateEmailString(this.formData.email)) {
        this.setInvalid('email');
        return false;
      }
      this.setValid('email');
      return true;
    },
    validateNumber() {
      const x=this.formData.phone;
      if (!((x.startsWith("+7") || x.startsWith("+3")) && Number(x).toString().length>=9 && Number(x).toString().length<=11)) {
        this.setInvalid('phone');
        return false;
      }
      this.setValid('phone');
      return true;
    },
    validateAge(){
      if (this.formData.age<=0 || this.formData.age>150){
        this.setInvalid('age');
        return false;
      }
      this.setValid('age');
      return true;
    },
    validateElements() {
      let valid = true;
      for (let name in this.formData) {
        if (this.formData[name] == "") {
          this.setInvalid(name);
          valid = false;
        } else {
          this.setValid(name);
        }
      }
      if (!Date.parse(this.formData['date'])){
        this.setInvalid('date');
        valid = false;
      } else {
        this.setValid('date');
      }
      return valid;
    },
    displayTip(inputType) {
      this.popUpTip[inputType] = true;
      setTimeout(() => {
        this.popUpTip[inputType] = false;
      }, 3000);
    },
    checkForm() {
      this.setValidElements();
      if (this.validateElements()){
        this.validateName();
        this.validateEmail();
        this.validateNumber();
        this.validateAge();
      }
    },
    removeOverlay() {
      this.sendPopup = false;
      this.erasePopup = false;
    },
    confirmedSendEmail() {
      this.readyToSend = true;
      this.$refs.but2.click();
      this.readyToSend = false;
      this.sendPopup = false;
    },
    confirmedErase() {
      this.readyToErase = true;
      this.$refs.but3.click();
      this.readyToErase = false;
      this.erasePopup = false;
    },
    erase(event) {
      if (this.readyToErase) {
        this.setValidElements();
        for (let name in this.formData) {
          if (name === "age") {
            this.formData.age = 0;
            continue;
          }
          this.formData[name] = '';
        }
        return;
      }
      event.preventDefault();
      this.erasePopup = true;
    },
    sendEmail(event) {
      if (this.readyToSend) {
        return;
      }
      event.preventDefault();
      this.setValidElements();
      if(this.validateElements()){
        if(this.validateName() && this.validateNumber() && this.validateEmail() && this.validateAge()){
          this.sendPopup = true;
        }
      }
    }
  }
};
</script>