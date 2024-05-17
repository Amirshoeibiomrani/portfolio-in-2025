import{TabsList,TabTrigger,Tabs,TabsContent} from "@/components/ui/tabs"
 import{User2,MailIcon,HomeIcon,PhoneCall,GraduationCap,Calendar,Briefcase} from "lucide-react"
 

 const infoData=[
    {
        icon: <User2 size={20} />,
        text:"Amir Shoeibi Omrani",
    },
    {
        icon: <PhoneCall size={20} />,
        text:"+12 345 6789",
    },
    {
        icon: <MailIcon size={20} />,
        text:"amirtahaomrany@gmail.com",
    },
    {
        icon: <Calendar size={20} />,
        text:"Born on 21 Mar,1995",
    },
    {
        icon: <GraduationCap size={20} />,
        text:"Bachelors on Computer Science",
    },
    {
        icon: <User2 size={20} />,
        text:"Florida, USA",
    },
 ]
 const About = () => {
  return (
    <div>About</div>
  )
}

export default About