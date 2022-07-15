$("#index1").on("click",function(){
  //alert(1);
  window.location.href="index1.html"
})

$("#index2").on("click",function(){
  //alert(1);
  window.location.href="index2.html"
})

$("#index3").on("click",function(){
  //alert(1);
  window.location.href="index3.html"
})

$("#index4").on("click",function(){
  //alert(1);
  window.location.href="index4.html"
})

$("#index5").on("click",function(){
  //alert(1);
  window.location.href="index5.html"
})

$("#index6").on("click",function(){
  //alert(1);
  window.location.href="index6.html"
})

$("#index7").on("click",function(){
  //alert(1);
  window.location.href="index7.html"
})

$("#index8").on("click",function(){
  //alert(1);
  window.location.href="index8.html"
})

/**
 * stepLength：一次滚动步长
 * speed：滚动速度
 * delay：停留时间
 * element：Element对象
 * element.offsetHeight 元素的像素高度（包括边框和填充）
 * element.scrollTop 元素的内容垂直滚动的像素
 * element.scrollHeight 元素的高度（包括带滚动条的隐蔽的地方）
 */
function autoScroll(stepLength, speed, delay, element) {
    let interval
    let step = 1
    element.scrollTop = 0
 
    function start() {
        interval = setInterval(scrolling, speed)
        element.scrollTop += step
    }
      
    function scrolling() {
        if(element.scrollTop % stepLength !== 0 && element.scrollTop === (element.scrollHeight - element.offsetHeight)) {
          element.scrollTop += step
        } else {
          if (element.scrollTop === 0 || element.scrollTop === (element.scrollHeight - element.offsetHeight)) { // 触顶或触底
            step *= -1 // 转换方向
          }
          if(parseInt(element.scrollTop)==parseInt(element.scrollHeight - element.offsetHeight)){
            //console.log("yjjj")
            element.scrollTop=0
            window.scrollTo(0,0)
          }
          //console.log("guan1")
          //console.log(element.scrollTop+":"+(element.scrollHeight - element.offsetHeight))
          clearInterval(interval)
          setTimeout(start, delay)
        }
    }
 
    if (element.offsetHeight !== element.scrollHeight) { // 元素内容没有溢出时，不触发
      console.log("guan")
        setTimeout(start, delay)
    }
}
autoScroll(550, 20, 100, document.getElementById('autoscroll'))
autoScroll(550, 20, 100, document.getElementById('autoscroll2'))