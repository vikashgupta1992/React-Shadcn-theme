import { useTheme } from '@/Context/theme-provider'
import { darkTheme, lightTheme } from '@/Utils/highchart-theming'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect } from 'react'

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

const Dashboard = () =>{
    const  { theme } = useTheme();
    
    useEffect(() => {
        // Apply the selected theme
        const themeSchema = theme === 'light' ? lightTheme : darkTheme;
        Highcharts.setOptions(themeSchema);
    }, [theme]);

    console.log('theme', theme);
    return (
        <div className='w-full h-full grid grid-cols-2 gap-4'>
            <HighchartsReact
                className='w-full h-[350px]'
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
            className='w-full h-[350px]'
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
                className='w-full h-[350px]'
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
                className='w-full h-[350px]'
                highcharts={Highcharts}
                options={options}
            />
            <HighchartsReact
                className='w-full h-[350px]'
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default Dashboard;