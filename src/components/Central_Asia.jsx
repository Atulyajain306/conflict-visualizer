import React from 'react'
import { useState } from 'react'
import countryList from './Data'
import govData from './GovData'
import Navbar from './Navbar'
import Footer from './Footer'
import Chart from "react-apexcharts"
const Central_Asia = () => {
    const [govSpending, setgovSpending] = useState('Kazakhstan')
    const [govSpendingData, setgovSpendingData] = useState(govData['Kazakhstan'])
    const [country, setcountry] = useState('Kazakhstan')
    const [data, setdata] = useState(countryList['Kazakhstan'])
    const changevalue=(e)=>{
        let country=e.target.value
        setcountry(country)
        setdata(countryList[country])
    }
    const changegov=(e)=>{
       let r=e.target.value
       setgovSpending(r)
       setgovSpendingData(govData[r])
    }
 return (
   <div>
     <Navbar/>
        <select value={country} onChange={changevalue}  className='m-4 mx-60 px-5 py-3 w-48 bg-slate-200 rounded-xl ' >
          
        <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kyrgyz Republic">Kyrgyz Republic</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          
        </select>
    <Chart className=" mx-52 my-7 bg-neutral-200 flex items-center justify-center rounded-3xl"
        type='area'
        width={1000}
        height={500}
        series={[
           {
              name:country,
              data:data
                  
           },
        ]}
       
        options={{
             title:{text:`Military Expenditure (Share of GDP)`,
                 style:{fontSize:20}
             },
             
           xaxis:{
              categories:[1950	,1951	,1952	,1953	,1954	,1955	,1956	,1957	,1958	,1959	,1960	,1961	,1962	,1963	,1964	,1965	,1966	,1967	,1968	,1969	,1970	,1971	,1972	,1973	,1974	,1975	,1976	,1977	,1978	,1979	,1980	,1981	,1982	,1983	,1984	,1985	,1986	,1987	,1988	,1989	,1990	,1991	,1992	,1993	,1994	,1995	,1996	,1997	,1998	,1999	,2000	,2001	,2002	,2003	,2004	,2005	,2006	,2007	,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023
              ],
               title:{text:"Time Period (1950-2023)",
                    style:{fontSize:15}
               }, 
               labels:{
                  show:false, 
               }    
           },
           colors:['#796ff4'],
           dataLabels:{
               enabled:false,
               formatter:(val)=>{return `${val},`},
               show:true
             },
           yaxis:{
               title:{text:"Share of GDP",
                     style:{fontSize:15}
               },
               dataLabels:{
                   enabled:true,
                   formatter:(val)=>{return `${val},`},
                   show:true
               },
           }

        }}
      >

      </Chart> 
        <div className='m-8 gap-x-5 flex'>
      <div className='w-[50%] mx-3 rounded-2xl flex items-center justify-center py-4 bg-neutral-200'>
      <Chart
        type='donut'
        width={700}
        height={500}

        series={[1.2363,0.4746,0.1395]}

        options={{
           title:{text:"Top 3 Military Spenders  (2023 in Billions)",
                  style:{fontSize:20}
           },
           labels:["Kazakhstan","Kyrgyz Republic","Tajikistan"],
           dataLabels:{
               enabled:true
           },
           plotOptions:{
               pie:{
                  donut:{
                   labels:{
                      show:true,
                      total:{
                       show:true,
                      } 
                   }
                  } 
               }
           }
        }}
        ></Chart></div>
         
         <div className='w-[50%] mx-3 rounded-2xl flex items-center justify-center py-4 bg-neutral-200'>
      <Chart
        type='bar'
        width={700}
        height={500}

        series={[{
           name:"Military Expenditure Per Capita",
           data:[69.0,63.1,13.8],
            }]}

        options={{
           title:{text:"Top 3 Military Spenders Per Capita (2023)",
                  style:{fontSize:20}
           },
           colors:["#f5b507"],
           xaxis:{
                title:{text:"Per Capita",
                     style:{fontSize:20}
                },
              categories:["Kyrgyz Republic","Kazakhstan","Tajikistan"],
              
           },
          
           yaxis:{
                 title:{text:"Country",
                   style:{fontSize:15}
                 }, 
               
           },
          
           dataLabels:{
               enabled:true
           },
           plotOptions:{
             bar:{
               horizontal:true
             }
           }
        }}
        ></Chart></div>
        
        
        </div>
     
        <select value={govSpending} onChange={changegov}  className='m-4 mx-60 px-5 py-3 w-48 bg-slate-200 rounded-xl ' >
          
        <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kyrgyz Republic">Kyrgyz Republic</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Uzbekistan">Uzbekistan</option>
          
          
          
       </select>
   <Chart className=" mx-52 my-7 bg-neutral-200 flex items-center justify-center rounded-3xl"
       type='area'
       width={1000}
       height={500}
       series={[
          {
             name:govSpending,
             data:govSpendingData
                 
          },
       ]}
      
       options={{
            title:{text:`Military Expenditure (Share of Government Spending)`,
                style:{fontSize:20}
            },
            
          xaxis:{
             categories:[	1988	,1989	,1990	,1991	,1992	,1993	,1994	,1995	,1996	,1997	,1998	,1999	,2000	,2001	,2002	,2003	,2004	,2005	,2006	,2007	,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023
             ],
              title:{text:"Time Period (1988-2023)",
                   style:{fontSize:15}
              }, 
              labels:{
                 show:false, 
              }    
          },
          colors:['#796ff4'],
          dataLabels:{
              enabled:false,
              formatter:(val)=>{return `${val},`},
              show:true
            },
          yaxis:{
              title:{text:"Share of Government Spending",
                    style:{fontSize:15}
              },
              dataLabels:{
                  enabled:true,
                  formatter:(val)=>{return `${val},`},
                  show:true
              },
          }

       }}
     >

     </Chart> 
     <Footer/>
   </div>
 )
}

export default Central_Asia
