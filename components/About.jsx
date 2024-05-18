import{TabsList,TabsTrigger,Tabs,TabsContent} from "@/components/ui/tabs"
 import{User2,MailIcon,HomeIcon,PhoneCall,GraduationCap,Calendar,Briefcase} from "lucide-react"
import DevImg from "./DevImg"
import Image from "next/image"
 

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
        text:"bachelor in computer science",
    },
    {
        icon: <HomeIcon size={20} />,
        text:"Florida, USA",
    },
 ]

 const qualificationData=[
    {
        title:'education',
        data:[
            {
                university:'Example University',
                qualification:'Bachelor Of Computer Science',
                years:'2023 - present',
            },
            {
                university:'Example University',
                qualification:'Bachelor Of Computer Science',
                years:'2023 - present',
            } 
        ]
    },
    {
        title:'exprience',
        data:[
            {
                company:'Freelancer.com',
                position:'Software Engineer',
                years:'2022 - present',
            },
            {
                company:'Freelancer.com',
                position:'Software Engineer',
                years:'2022 - present',
            },
          
        ]
    }
 ]
 const skillData=[
    {
        title:'skills',
        data:[
            {
                name:'HTML,CSS'
            },
            {
                name:'JavaScript'            },
            {
                name:'Tailwind'
            },
            {
                name:'React , Redux'
            },
            {
                name:'Next'
            },
            {
                name:'Framer Motion, ChakraUI'
            },
            {
                name:'GitHub,Git'
            },
        ]
    },
    {
        title:'skills',
        data:[
            {
                imgPath:'/about/vscode.svg',
            },
            {
                imgPath:'/about/figma.svg',
            },  {
                imgPath:'/about/notion.svg',
            },  {
                imgPath:'/about/wordpress.svg',
            },
     
        ]
    }
 ]
 const About = () => {
 const getData= (arr,title)=>{
    return arr.find((item) => item.title === title);
 
 }
    return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
              </h2>
              <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">

              <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer.png" />
                </div>
              </div>
        </div>
        {/* tabs */}
        <div className="flex-1">
            <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none" >

                <TabsTrigger className="w-[162px] xl:w-auto"  value="personal" >
          
               Personal Info
            </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto"  value="qualifications" >Qualifications</TabsTrigger>
                <TabsTrigger  className="w-[162px] xl:w-auto" value="skills" >Skills</TabsTrigger>
                </TabsList>
                {/* tabs content */}
                <div className="text-lg mt-12 xl:mt-8">
                    {/* personal */}
                    <TabsContent value="personal">
                        <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    I specialize in crafting intuitive websites with cutting-edge technology, dynamic and engaging user experiences.
                </p>

                {/* icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item,index)=>{
                        return(
                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                <div className="text-primary">{item.icon}</div>
                                <div >{item.text}</div>
                            </div>
                        )
                    })}
                </div>
                {/* languages */}
                <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border"></div>
                    <div className="">English, French, Spanish, Italian</div>
                </div>
            </div>
                    </TabsContent>
                    {/* qualifications */}

                    <TabsContent value="qualifications">
                         <div className="">
                            <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                            {/* exprience & education wrapper */}
                            <div className="">
                                {/* experience */}
                                <div className="">
                                    <div className="flex gap-x-4 items-center text-[22px]">
                                        <Briefcase />
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, 'experience' ).title}
                                            </h4>
                                    </div>
                                </div>
                                {/* education */}
                                <div className="">education</div>
                            </div>
                         </div>
                         </TabsContent>
                    <TabsContent value="skills">skills info</TabsContent>

                </div>
            </Tabs>
        </div>
        
        </section>
  )
}

export default About