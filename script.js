anychart.onDocumentReady(function () {
  var chart = anychart.line();

  chart.title("Sales Value");
  chart.title("Overview");

  var data = anychart.data.set([
    ["May", 0],
    ["Jun", 22],
    ["Jul", 20],
    ["Aug", 30],
    ["Sep", 23],
    ["Oct", 45],
    ["Nov", 26],
    ["Dec", 60],
  ]);

  var spline = chart.spline(data.mapAs({ x: 0, value: 1 }));
  spline.name("Sales");
  chart.title().enabled(true);
  chart.title().useHtml(true);
  chart.title().align("left");

  chart
    .title()
    .text(
      "Overview" +
        '<br><div style="color: #FFF; font-size: 15px;">' +
        "Sales Value</div>"
    );
  chart.title().padding(0, 0, 50, 0);

  spline.stroke("5 #5E72E4 ");

  chart.background().fill("#172B4D");
  chart.container("LineChart").draw();

  var yAxis = chart.yAxis();
  yAxis.scale().ticks().interval(10);
  yAxis.scale().minimum(0);
  yAxis.scale().maximum(60);
  yAxis.labels().format("{%value}");

  chart.yAxis().labels().format("{%Value}");

  // Set the dashed line style for the Y axis background grid
  chart.yGrid().stroke({
    color: "#525F7F",
    thickness: 2,
    dash: "5 5",
    lineCap: "round",
  });
  chart.yGrid().drawFirstLine(false);
  var xAxis = chart.xAxis();
  xAxis.stroke("none");
  var yAxis = chart.yAxis();
  yAxis.stroke("none");
});

// SECOND ---------

anychart.onDocumentReady(function () {
  var chart = anychart.column();

  var dataSet = anychart.data.set([
    ["Jul", 25],
    ["Aug", 20],
    ["Sep", 30],
    ["Oct", 22],
    ["Nov", 17],
    ["Dec", 29],
  ]);

  chart.title("Performance \n Total orders");

  // chart
  //   .title()
  //   .text(
  //     "Performance" +
  //       '<br><div style="color: black; font-size: 15px; border-bottom: 2px solid red;">' +
  //       "Total orders</div>"
  //   );
  chart.title().padding(0, 0, 50, 0);
  chart.column().width(10);

  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

  var seriesFirst = chart.column(firstSeriesData);
  seriesFirst.name("Orders");

  var shapes = seriesFirst.rendering().shapes();

  seriesFirst.color("#FB6340");

  seriesFirst.rendering().point(drawer).updatePoint(drawer).shapes(shapes);

  //   var xAxis = chart.xAxis();
  //   xAxis.scale().ticks().interval(10).minimum(0).maximum(30);
  //   xAxis.labels().format("{%value}");

  chart.container("barChart");
  chart.draw();
});

// var xAxis = chart.xAxis();
// xAxis.stroke("none");
// var yAxis = chart.yAxis();
// yAxis.stroke("none");

function drawer() {
  if (this.missing) {
    return;
  }

  var shapes = this.shapes || this.getShapesGroup(this.pointState);
  var leftX = this.x - this.pointWidth / 2;
  var rightX = leftX + this.pointWidth;
  var rx = this.pointWidth / 2;

  shapes.path
    .clear()
    .moveTo(leftX, this.zero)
    .lineTo(leftX, this.value + rx)
    .circularArc(leftX + rx, this.value + rx, rx, rx, 180, 180)
    .lineTo(rightX, this.zero)
    .close();
}

// MAIN MAIN MAIN
const checkboxes = document.querySelectorAll(".hidden__checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const todoItem = event.target.closest(".todo__item");

    const nameElement = todoItem.querySelector(".todo__item__name");
    const timeElement = todoItem.querySelector(".todo__item__time");

    if (event.target.checked) {
      nameElement.style.textDecoration = "line-through";
      timeElement.style.textDecoration = "line-through";
    } else {
      nameElement.style.textDecoration = "none";
      timeElement.style.textDecoration = "none";
    }
  });
});

