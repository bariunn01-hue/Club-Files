<h1 align="center">💻 Вэб хөгжүүлэлтийн үндсэн лавлах</h1>

<p align="center"><strong>HTML · CSS · JavaScript</strong><br>
Эхлэн суралцагчдад зориулсан товч, жишээ кодтой гарын авлага</p>

<p align="center"><code>БҮТЭЦ</code> · <code>ЗАГВАР</code> · <code>ҮЙЛДЭЛ</code></p>

---

## 📚 Агуулга

- [Товч танилцуулга](#-товч-танилцуулга)
- [1. HTML — Бүтэц](#1-html--бүтэц)
  - [Гарчиг ба догол мөр](#11-гарчиг-ба-догол-мөр)
  - [Холбоос ба зураг](#12-холбоос-ба-зураг)
  - [Button ба container](#13-button-ба-container)
  - [class ба id](#14-class-ба-id)
- [2. CSS — Загвар](#2-css--загвар)
  - [Өнгө ба үсгийн тохиргоо](#21-өнгө-ба-үсгийн-тохиргоо)
  - [Зай ба хүрээ](#22-зай-ба-хүрээ)
  - [Хэмжээ ба layout](#23-хэмжээ-ба-layout)
  - [Тэгшлэлт, hover ба transition](#24-тэгшлэлт-hover-ба-transition)
- [3. JavaScript — Үйлдэл](#3-javascript--үйлдэл)
  - [Variable ба element сонгох](#31-variable-ба-element-сонгох)
  - [Текст ба event](#32-текст-ба-event)
  - [Нөхцөл ба function](#33-нөхцөл-ба-function)
  - [Array ба random тоо](#34-array-ба-random-тоо)
  - [Loop ба timer](#35-loop-ба-timer)
- [4. Гурвыг хамтад нь ашиглах](#4-гурвыг-хамтад-нь-ашиглах)
- [⭐ Эхлээд сурах зүйлс](#-эхлээд-сурах-зүйлс)

---

## ✨ Товч танилцуулга

Website бүтээхэд гурван үндсэн технологи түгээмэл ашиглагддаг.

| Технологи | Үүрэг | Жишээ |
|---|---|---|
| **HTML** | Website-ийн бүтэц, агуулгыг үүсгэнэ. | Гарчиг, текст, зураг, button |
| **CSS** | Website-ийн харагдах байдлыг тохируулна. | Өнгө, үсгийн хэмжээ, зай, layout |
| **JavaScript** | Website-д үйлдэл, интерактив боломж нэмнэ. | Button дарахад текст өөрчлөх |

> 💡 **Санамж:** Бүхнийг цээжлэх шаардлагагүй. Жишээ кодыг хуулж туршаад, дараа нь утгуудыг өөрчилж үзээрэй.

---

# 1. HTML — Бүтэц

HTML нь website дээр гарчиг, текст, зураг, холбоос, button зэрэг агуулгыг байрлуулахад ашиглагдана.

## 1.1 Гарчиг ба догол мөр

**Heading — `<h1>`–`<h6>`**

Гарчиг болон дэд гарчиг үүсгэнэ. `<h1>` нь гол гарчиг, `<h2>` нь дэд гарчиг. Тоо ихсэх тусам гарчгийн түвшин доошилно.

```html
<h1>Миний website</h1>
<h2>Миний тухай</h2>
```

**Paragraph — `<p>`**

Энгийн текстийг тусдаа догол мөр болгон харуулна.

```html
<p>Сайн байцгаана уу!</p>
```

## 1.2 Холбоос ба зураг

**Link — `<a>`**

Текст эсвэл бусад агуулга дээр дарахад өөр хуудас руу шилжих боломж олгоно. `href` нь очих хаягийг заана.

```html
<a href="https://example.com">Энд дарна уу</a>
```

**Image — `<img>`**

Website дээр зураг харуулна. `src` нь зургийн байршлыг, `alt` нь зургийг тайлбарлах текстийг заана.

```html
<img src="cat.jpg" alt="Муур">
```

## 1.3 Button ба container

**Button — `<button>`**

Хэрэглэгч дарахад үйлдэл гүйцэтгэх button үүсгэнэ. Ямар үйлдэл хийхийг JavaScript-ээр тохируулж болно.

```html
<button>Намайг дар</button>
```

**Container — `<div>`**

Элементүүдийг нэг бүлэг болгон багцлахад ашиглана. Дараа нь тэр бүлгийн харагдах байдлыг CSS-ээр тохируулж болно.

```html
<div>
  <h2>Миний тухай</h2>
  <p>Миний түүх.</p>
</div>
```

## 1.4 `class` ба `id`

HTML element-д нэр өгч, тэдгээрийг CSS-ээр загварчлах эсвэл JavaScript-ээр сонгоход ашиглана.

- `class` — ижил нэрийг олон element-д ашиглаж болно.
- `id` — тухайн хуудсанд нэг тодорхой element-ийг ялган танихад ашиглана.

```html
<p class="note">Сайн байна уу?</p>
<h1 id="title">Тавтай морил!</h1>
```

---

# 2. CSS — Загвар

CSS нь website-ийн өнгө, үсгийн хэлбэр, хэмжээ, зай, байрлал болон hover зэрэг эффектийг тохируулна.

## 2.1 Өнгө ба үсгийн тохиргоо

**`color`** — текстийн өнгийг өөрчилнө.

```css
color: blue;
```

**`background-color`** — element-ийн дэвсгэр өнгийг өөрчилнө.

```css
background-color: pink;
```

**`font-size`, `font-family`, `font-weight`** — үсгийн хэмжээ, төрх, бүдүүн нарийныг тохируулна.

```css
font-size: 24px;
font-family: Arial, sans-serif;
font-weight: bold;
```

## 2.2 Зай ба хүрээ

**`margin` ба `padding`**

- `margin` — element-ийн гаднах зай.
- `padding` — element-ийн агуулга болон хүрээний хоорондох дотор зай.

```css
margin: 20px;
padding: 10px;
```

**`border` ба `border-radius`**

`border` нь хүрээ нэмнэ. `border-radius` нь буланг дугуйруулна.

```css
border: 1px solid black;
border-radius: 12px;
```

## 2.3 Хэмжээ ба layout

**`width` ба `height`**

Element-ийн өргөн болон өндрийг тохируулна.

```css
width: 200px;
height: 100px;
```

**`display: flex`**

Element-үүдийг мөр эсвэл баганаар байрлуулахад тусалдаг. Navigation bar, button-уудын бүлэг, card-уудын layout хийхэд түгээмэл ашиглана.

```css
.container {
  display: flex;
  gap: 10px;
}
```

## 2.4 Тэгшлэлт, hover ба transition

**`justify-content` ба `align-items`**

Flex container доторх element-үүдийн байрлал, тэгшлэлтийг тохируулна.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**`:hover`**

Хулганы заагч element-ийн дээр очих үед өөр загвар харуулна.

```css
button:hover {
  background-color: pink;
}
```

**`transition`**

Өнгө, хэмжээ зэрэг CSS-ийн өөрчлөлтийг огцом биш, жигд шилжүүлж харуулна.

```css
button {
  transition: 0.3s;
}
```

---

# 3. JavaScript — Үйлдэл

JavaScript нь website-д интерактив боломж нэмнэ. Жишээлбэл, button дарахад текст өөрчлөх, тооцоолол хийх, тоглоомын үйлдэл гүйцэтгэхэд ашиглана.

## 3.1 Variable ба element сонгох

**Variable — `let`, `const`**

Мэдээллийг хадгална. Утгыг дахин оноохгүй бол `const`, харин дараа нь дахин оноох бол `let` ашиглана.

```javascript
const name = "Erdene";
let score = 0;
```

**`getElementById()`**

HTML доторх `id`-аар нь element сонгоно. Ингэснээр JavaScript тухайн element-тэй ажиллах боломжтой болно.

```javascript
const title = document.getElementById("title");
```

## 3.2 Текст ба event

**`textContent`**

Element дотор харагдаж буй текстийг өөрчилнө.

```javascript
title.textContent = "Сайн байна уу!";
```

**`addEventListener()`**

Хэрэглэгч button дарах зэрэг event гаргахад код ажиллуулна.

```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Сайн байна уу!");
});
```

## 3.3 Нөхцөл ба function

**`if` ба `else`**

Нөхцөл үнэн эсэхээс хамааран өөр өөр код ажиллуулна.

```javascript
if (score >= 10) {
  alert("Та яллаа!");
} else {
  alert("Дахин оролдоорой!");
}
```

**Function — `function`**

Дахин ашиглаж болох кодын бүлэг үүсгэнэ. Function-ийг дуудахад доторх код ажиллана.

```javascript
function sayHello() {
  alert("Сайн байна уу!");
}

sayHello();
```

## 3.4 Array ба random тоо

**Array — `[]`**

Олон утгыг нэг variable-д жагсаалт хэлбэрээр хадгална. Элементүүдийн дугаарлалт `0`-ээс эхэлдэг.

```javascript
const words = ["Мөрөөд", "Бүтээ", "Судал"];

console.log(words[0]); // Мөрөөд
```

**`Math.random()`**

`0`-ээс `1`-ээс бага утгатай санамсаргүй тоо үүсгэнэ. Дараах жишээ `0`–`9` хооронд бүхэл тоо гаргана.

```javascript
const number = Math.floor(Math.random() * 10);
```

## 3.5 Loop ба timer

**Loop — `for`**

Кодын хэсгийг олон удаа давтан ажиллуулна.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**`setTimeout()` ба `setInterval()`**

- `setTimeout()` — хугацаа өнгөрсний дараа нэг удаа код ажиллуулна.
- `setInterval()` — заасан хугацааны давтамжаар кодыг дахин дахин ажиллуулна.

```javascript
setTimeout(function() {
  alert("Хугацаа дууслаа!");
}, 1000);
```

---

# 4. Гурвыг хамтад нь ашиглах

Доорх жишээнд button дарахад гарчгийн текст өөрчлөгдөнө.

### HTML — Бүтэц

```html
<h1 id="message">Тавтай морил!</h1>
<button id="changeButton">Текст өөрчлөх</button>
```

### CSS — Загвар

```css
h1 {
  color: purple;
}

button {
  padding: 10px;
  border-radius: 8px;
}
```

### JavaScript — Үйлдэл

```javascript
const message = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", function() {
  message.textContent = "Чи чадлаа!";
});
```

<details>
<summary>🔍 Энэ жишээ хэрхэн ажиллаж байна вэ?</summary>

1. **HTML** нь гарчиг болон button үүсгэнэ.
2. **CSS** нь гарчгийн өнгө, button-ийн зай болон буланг тохируулна.
3. **JavaScript** нь button-ийн `click` event-ийг сонсоно.
4. Button дарахад `textContent` гарчгийн текстийг өөрчилнө.

</details>

---

# ⭐ Эхлээд сурах зүйлс

Бүх ойлголтыг нэг дор цээжлэх шаардлагагүй. Эхлээд дараах зүйлсийг ойлгож, өөрөө ашиглаж сурахад хангалттай.

| HTML | CSS | JavaScript |
|---|---|---|
| Гарчиг (`h1`–`h6`) | `color` | `let`, `const` |
| Догол мөр (`p`) | `background-color` | `getElementById()` |
| Зураг (`img`) | `font-size` | `textContent` |
| Холбоос (`a`) | `margin`, `padding` | `addEventListener()` |
| Button (`button`) | `border`, `border-radius` | `if`, `else` |
| `class`, `id` | `display: flex` | `function` |

> 🚀 **Дадлага хийх арга:** Жишээ кодыг ажиллуулаад нэг зүйл өөрчил. Өнгө, текст, хэмжээ, зураг зэргийг сольж турш. Кодоо өөрчилсний дараа website дээр юу өөрчлөгдсөнийг ажигла.

---

<div align="center">

**Хийж үз · Алдаа гарга · Зас · Дахин турш**

*Энэ лавлахыг өөрийн website болон coding төслүүд дээр ажиллахдаа ашиглаарай.*

</div>
