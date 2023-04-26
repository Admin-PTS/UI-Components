import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  name = 'Angular';
  selectedObject: any;
  textTypes = [
    { key : '0 NORTH AVE WAKEFIELD LLC' , value : '0 NORTH AVE WAKEFIELD LLC' },
    { key : '012 GLOBAL INC' , value : '012 GLOBAL INC' },
    { key : '0965688 BC LTD DBA PROCOGIA' , value : '0965688 BC LTD DBA PROCOGIA' }
  ]

  handleChange(index: any) {
    console.log(this.textTypes[index.target.selectedIndex]);
    this.selectedObject = this.textTypes[index.target.selectedIndex].value;
  }


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;
  dataList: Array<any> = [];
  data: any = [{
    Employer: '0 NORTH AVE WAKEFIELD LLC',
    NAICS: 53,
    TaxID: 4694,
    State: 'MA',
    City: 'WAKEFIELD',
    ZIP: '1880',
    Year: [
      {
        FiscalYear: 2022,
        InitialApproval: 1,
        InitialDenial: 0,
        ContinuingApproval: 0,
        ContinuingDenial: 0
      },
      {
        FiscalYear: 2021,
        InitialApproval: 2,
        InitialDenial: 1,
        ContinuingApproval: 1,
        ContinuingDenial: 0
      },
      {
        FiscalYear: 2020,
        InitialApproval: 3,
        InitialDenial: 2,
        ContinuingApproval: 1,
        ContinuingDenial: 1
      }
    ]
  }, {
    Employer: '012 GLOBAL INC',
    NAICS: 99,
    TaxID: 3065,
    State: 'FL',
    City: 'POMPANO BEACH',
    ZIP: '33063',
    Year: [
      {
        FiscalYear: 2022,
        InitialApproval: 10,
        InitialDenial: 1,
        ContinuingApproval: 1,
        ContinuingDenial: 0
      },
      {
        FiscalYear: 2021,
        InitialApproval: 20,
        InitialDenial: 2,
        ContinuingApproval: 2,
        ContinuingDenial: 0
      },
      {
        FiscalYear: 2020,
        InitialApproval: 30,
        InitialDenial: 20,
        ContinuingApproval: 10,
        ContinuingDenial: 1
      }
    ]
  }, {
    Employer: '0965688 BC LTD DBA PROCOGIA',
    NAICS: 51,
    TaxID: 209,
    State: 'WA',
    City: 'SEATTLE',
    ZIP: '98101',
    Year: [
      {
        FiscalYear: 2022,
        InitialApproval: 100,
        InitialDenial: 20,
        ContinuingApproval: 10,
        ContinuingDenial: 0
      },
      {
        FiscalYear: 2021,
        InitialApproval: 200,
        InitialDenial: 100,
        ContinuingApproval: 10,
        ContinuingDenial: 90
      },
      {
        FiscalYear: 2020,
        InitialApproval: 300,
        InitialDenial: 200,
        ContinuingApproval: 100,
        ContinuingDenial: 100
      }
    ]
  }
  ]

  constructor(private route: Router) {
    this.dataList = [
      { code: 1, name: "0 NORTH AVE WAKEFIELD LLC" },
      { code: 2, name: "012 GLOBAL INC" },
      { code: 3, name: "0965688 BC LTD DBA PROCOGIA" }
    ]
    this.chartOptions = {
      series: [
        {
          name: "InitialApproval",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: "InitialDenial",
          type: "column",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "ContinuingApproval",
          type: "column",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      chart: {
        id: "barQuarter",
        height: 350,
        type: "line",
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003"
      ],
      markers: {
        size: 0
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yaxis: {
        title: {
          text: "Number of Applications"
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " applications";
            }
            return y;
          }
        }
      }
    };
  }

  ngOnInit(): void {
    this.selectedObject = '0 NORTH AVE WAKEFIELD LLC';
    this.filterData(this.selectedObject);
    
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  selected(){
    console.log(this.selectedObject)
  }
  filterData(employeer: string) {
    // employeer = '0965688 BC LTD DBA PROCOGIA';
    employeer = this.selectedObject;
    let companyInfo = this.data.find((x: any) => x.Employer == employeer)
    let year : number[] =[];
    let InitialApprovalArray: number[] =[];
    let InitialDenialArray: number[] =[];
    let ContinuingApproval: number[] =[];
    if (companyInfo) {
      companyInfo.Year.forEach((element: any) => {
        year.push(element.FiscalYear)
        InitialApprovalArray.push(element.InitialApproval);
        InitialDenialArray.push(element.InitialDenial);
        ContinuingApproval.push(element.ContinuingApproval);
      });
      this.chartOptions.xaxis.categories = year;
      this.chartOptions.series[0].data = InitialApprovalArray;
      this.chartOptions.series[1].data = InitialDenialArray;
      this.chartOptions.series[2].data = ContinuingApproval;
      let arrayInput = [];
      arrayInput.push(InitialApprovalArray);
      arrayInput.push(InitialDenialArray);
      arrayInput.push(ContinuingApproval);

      // this.chart.updateSeries([{ data: [InitialApprovalArray]}])
      // alert("Record inserted successfully");

      return window.ApexCharts.exec("barQuarter", "updateOptions", {
        series: this.chartOptions.series,
      });
      alert("Record inserted successfully");

    }
   
  }
}


