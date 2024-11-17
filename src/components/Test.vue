<script setup>

</script>

<template>
  <div id="filler-top"></div>
  <div class="content-container">
    <div class="information">Тест по дисциплине "Инженерная графика"</div>
    <form id="survey-form" action="mailto:youraddr@domain.com?subject=dsifisdf" method="GET">
      <label id="name-label" for="name" class="test"><span class="label-text">Фамилия Имя Отчество</span><input id="name" type="text" placeholder="Введите своё имя" required /></label>
      <label for="dropdown" class="test">
        <span class="label-text">Группа</span>
        <select id="dropdown">
          <option>ИТ/б-24-1-о</option>
          <option>ИТ/б-24-2-о</option>
          <option>ИТ/б-24-3-о</option>
          <option>ИТ/б-24-4-о</option>
          <option>ИТ/б-24-5-о</option>
          <option>ИТ/б-24-6-о</option>
          <option>ИТ/б-24-7-о</option>
          <option>ИТ/б-24-8-о</option>
          <option>ИТ/б-23-1-о</option>
          <option>ИТ/б-23-2-о</option>
          <option>ИТ/б-23-3-о</option>
          <option>ИТ/б-23-4-о</option>
          <option>ИТ/б-23-5-о</option>
          <option>ИТ/б-23-6-о</option>
          <option>ИТ/б-23-7-о</option>
          <option>ИТ/б-23-8-о</option>
          <option>ИВТ/б-22-1-о</option>
          <option>ИВТ/б-22-2-о</option>
          <option>ИС/б-22-1-о</option>
          <option>ИС/б-22-2-о</option>
          <option>ПИ/б-22-1-о</option>
          <option>ПИ/б-22-2-о</option>
          <option>ПИН/б-22-1-о</option>
          <option>ПИН/б-22-2-о</option>
          <option>ИВТ/б-21-1-о</option>
          <option>ИВТ/б-21-2-о</option>
          <option>ИВТ/б-21-3-о</option>
          <option>ИС/б-21-1-о</option>
          <option>ИС/б-21-2-о</option>
          <option>ИС/б-21-3-о</option>
          <option>ПИ/б-21-1-о</option>
          <option>ПИН/б-21-1-о</option>
        </select>
      </label>
      <label id="number-label"  for="number" class="test"><div class="label-text">Возраст</div><input id="number" type="number" min=0 max=150 placeholder="Введите свой возраст" required /></label>
      <label id="question1-label" for="question1" class="test"><div class="label-text">Документ, определяющий состав сборочной единицы, комплекса или комплекта, называется </div><input id="question1" type="text" placeholder="Введите ответ" required /></label>
      <div id="myboxes" class="test">
        <label class="label-text">К группе деталей относят изделие</label>
        <label class="check">Самолёт
          <input type="checkbox" value="plane" class="checkboxes"/>
        </label>
        <label class="check">Болт
          <input type="checkbox" value="bolt" class="checkboxes"/>
        </label>
        <label class="check">Вентиль
          <input type="checkbox" value="vent" class="checkboxes"/>
        </label>
        <label class="check">Ножницы
          <input type="checkbox" value="scissors" class="checkboxes"/>
        </label>
      </div>
      <label for="dropdown2" class="test"><span class="label-text">Из чего состоит квадрат?</span></label>
      <select id="dropdown2">
        <optgroup label="Линии">
          <option>Прямые линии</option>
          <option>Прерывистые линии</option>
          <option>Пунктирные линии</option>
        </optgroup>
        <optgroup label="Кривые">
          <option>Прямые кривые</option>
          <option>Прерывистые кривые</option>
          <option>Пунктирные кривые</option>
        </optgroup>
        <optgroup label="Ломаные">
          <option>Прямые ломаные</option>
          <option>Прерывистые ломаные</option>
          <option>Пунктирные ломаные</option>
        </optgroup>
      </select>
      <div class="bottom-buttons">
        <button id="but2" type="submit">Отправить</button>
        <button id="but2" type="reset">Очистить</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>