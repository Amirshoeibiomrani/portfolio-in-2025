import {GanttChartSquare,Blocks,Gem} from 'lucide-react'
import{Card,CardContent,CardDescription,CardHeader,CardTitle} from '@/components/ui/card'
 
const servicesData=[
    {
    icon:<GanttChartSquare size={72 } strokeWidth={0.8} />,
    title:'Web Design',
    description:'Lorem',
},
{
    icon:<Blocks size={72 } strokeWidth={0.8} />,
    title:'Web Development',
    description:'Lorem',
},
{
    icon:<Gem size={72 } strokeWidth={0.8} />,
    title:'App Development',
    description:'Lorem',
},
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* grid items */}
            <div>grid items</div>
        </div>
    </section>
  )
}

export default Services