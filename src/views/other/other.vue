<!--  -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-green"
       @mouseleave="noClick">
    <div class="container-xl">
      <a class="navbar-brand"
         href="#">LOGO</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample07XL"
              aria-controls="navbarsExample07XL"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse"
           id="navbarsExample07XL">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active menu-li"
              v-for='(item,index) in menuArr'
              :key='index'>
            <!-- @mouseleave="mouseLeave"  @mouseover='menuChick(item,index)' -->
            <a :class='itemClickKey==index ?"color-blue nav-link":"nav-link"'
               href="#"
               @mouseover.stop='menuChick(item,index)'>
              {{item.title}}
              <span v-if='item.children.length'>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     class="bi bi-chevron-down"
                     viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </a>
          </li>
          <div class="menu-div"
               v-if='itemClickKey==index && item.children.length'>
            <ul>
              <li v-for='(item1,index1) in item.children'
                  :key='index1'>
                <div :class='LeftArrKey==index1 ?"color-blue leftMenu":"leftMenu"'
                     @mouseover.stop='leftClick(item1,index1)'>{{item1.title}}</div>

              </li>
            </ul>
            <ul class="img-ul">
              <li v-for='(item2,index2) in LeftArrItem'
                  :key='index2'
                  @click.stop='imgClick(item2,index2)'>
                <img :src="item2.src">
                <p class="img-p">{{item2.text}}</p>
              </li>
              <li @click.stop='goTo'>
                <p class="img-p"
                   style="color:blue;text-align:center;line-height:100px;">ALL</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div class="form-inline my-2 my-md-0">
        图标
      </div>
    </div>
    1111
  </nav>
</template>

<script>
export default {
  data() {
    return {

      menuArr: [
        {
          title: 'HOME', path: '/', children: [
            { title: '1-1菜单', imgArr: [{ path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaa' }, { path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaaa' }, { path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaaa' }, { path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaaa' }] },
            { title: '1-2菜单', imgArr: [{ path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: '111111' }] },
            { title: '1-3菜单', imgArr: [{ path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: '22222222' }] },
          ]
        },
        { title: 'HOME111', path: '/', children: [{ title: '1-1', imgArr: [{ path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaaa' }, { path: '/', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', text: 'aaaaaa' }] }] },
        { title: 'HOME111', path: '/', children: [] },
      ],
      itemClickKey: -1,
      childrenItem: [],
      LeftArrItem: [],
      LeftArrKey: 0

    }
  },
  mounted() {
  },
  methods: {
    menuChick(item, index) {
      // console.log(this.itemClickKey, index)
      if (this.itemClickKey == index) {
        this.noClick()
        return
      }
      this.childrenItem = item
      this.itemClickKey = index
      this.LeftArrItem = item.children.length ? item.children[0].imgArr : []
    },
    noClick() {
      this.itemClickKey = -1
    },
    leftClick(item, index) {
      // console.log(item, index, 'item, index')
      this.LeftArrItem = item.imgArr
      this.LeftArrKey = index
    },
    imgClick(item, index) {
      // console.log(item, 'aaa')
      // this.router.push({})
    },
    goTo() {
      // this.router.push({})
    }
  },
  components: {
  }
}

</script>

<style >
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset,
img {
  border: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.menu-li {
}

.bg-green {
  background-color: #9df3c4;
}

.menu-div {
  background-color: #ececec;
  position: absolute;
  top: 56px;
  left: 0;
  display: flex;
  width: 100%;
  padding: 10px;
}

.menu-div ul:first-child {
  padding: 10px;
  border-right: 1px solid #000;
}

.menu-div ul li {
  padding: 4px;
}

.leftMenu {
  width: 160px;
  text-align: center;
  cursor: pointer;
}

.img-ul {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.img-ul li {
  width: 150px;
  margin: 0 10px;
  position: relative;
}

.img-ul li img {
  width: 150px;
}

.color-blue {
  color: blue !important;
}

.img-p {
  position: absolute;
  bottom: 7px;
  color: #fff;
  left: 12px;
  font-size: 12px;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
