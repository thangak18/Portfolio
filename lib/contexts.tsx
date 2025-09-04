"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

interface VisitorContextType {
  visitorCount: number
  incrementVisitor: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const VisitorContext = createContext<VisitorContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {
    'hero.title': "Hi, I'm Thang",
    'hero.subtitle': "Software Engineer | Passionate about building user-friendly applications",
    'hero.description': "I create modern, responsive applications using React, Next.js, TypeScript, and other technologies. Always eager to learn new technologies and solve complex problems through clean, efficient code.",
    'hero.viewWork': "View My Work",
    'hero.contactMe': "Contact Me",
    'skills.title': "Technologies I Work With",
    'nav.home': "Home",
    'nav.about': "About",
    'nav.projects': "Projects",
    'nav.contact': "Contact",
    'footer.visitors': "Visitors",
    'footer.madeWith': "Made with",
    'footer.using': "using Next.js & Tailwind CSS",
    'about.title': "About Me",
    'about.subtitle': "Get to know me better",
    'about.description': "I'm a passionate software engineer with a strong foundation in modern software development technologies. I love creating beautiful, functional applications that solve real-world problems.",
    'about.experience': "Experience",
    'about.education': "Education",
    'about.skills': "Skills",
    'about.interests': "Interests",
    'about.contact': "Get In Touch",
    'about.intro': "Hello! I'm Thang, a passionate software engineer based in Ho Chi Minh City, VietNam. I discovered my love for programming during college and have been dedicated to creating amazing software solutions ever since.",
    'about.journey': "My journey started with programming fundamentals and I quickly fell in love with software development. I enjoy the problem-solving aspect of development and the satisfaction of bringing ideas to life through code.",
    'about.personal': "When I'm not coding, you can find me exploring new coffee shops, hiking local trails, or contributing to open-source projects. I'm always eager to learn new technologies and collaborate with other developers.",
    'about.funFacts': "Fun Facts",
    'about.coffee': "Cups of coffee per week",
    'about.languages': "Programming languages",
    'about.passion': "Passion for learning",
    'about.badges.coffee': "Coffee Enthusiast",
    'about.badges.hiking': "Hiking Lover",
    'about.badges.opensource': "Open Source Contributor",
    'about.badges.learner': "Continuous Learner",
    'about.badges.solver': "Problem Solver",
    'about.interests.cleanCode': "Clean Code",
    'about.interests.cleanCodeDesc': "Writing maintainable and readable code",
    'about.interests.uiux': "UI/UX Design",
    'about.interests.uiuxDesc': "Creating beautiful user experiences",
    'about.interests.performance': "Performance",
    'about.interests.performanceDesc': "Optimizing for speed and efficiency",
    'about.interests.opensource': "Open Source",
    'about.interests.opensourceDesc': "Contributing to the developer community",
    'about.interests.flutter': "Mobile Development",
    'about.interests.flutterDesc': "Building cross-platform mobile applications",
    'projects.title': "My Projects",
    'projects.subtitle': "Here are some of the projects I've worked on. Each one represents a learning journey and showcases different aspects of my development skills.",
    'projects.featured': "Featured Projects",
    'projects.other': "Other Projects",
    'projects.collaborate': "Interested in Working Together?",
    'projects.collaborateDesc': "I'm always open to discussing new opportunities and interesting projects. Let's connect and see how we can create something amazing together!",
    'projects.getInTouch': "Get In Touch",
    'projects.expenseTracker.title': "Expense Tracker App",
    'projects.expenseTracker.desc': "A full-stack expense tracking application with user authentication, category management, and detailed analytics. Built with React, Node.js, and MongoDB.",
    'projects.weather.title': "Weather Dashboard",
    'projects.weather.desc': "A responsive weather application that displays current conditions and 5-day forecasts. Features location search and beautiful weather animations.",

    'projects.portfolio.title': "Portfolio Website",
    'projects.portfolio.desc': "This very website! A responsive portfolio built with Next.js, featuring dark mode, smooth animations, and optimized performance.",
    'projects.ecommerce.title': "E-commerce Store",
    'projects.ecommerce.desc': "A modern e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
    'contact.title': "Get In Touch",
    'contact.subtitle': "I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.",
    'contact.sendMessage': "Send Me a Message",
    'contact.contactInfo': "Contact Information",
    'contact.connectWithMe': "Connect With Me",
    'contact.letsCollaborate': "Let's Collaborate",
    'contact.alwaysInterested': "I'm always interested in:",
    'contact.frontendDev': "Frontend development projects",
    'contact.openSource': "Open source contributions",
    'contact.learning': "Learning opportunities",
    'contact.mentorship': "Mentorship and networking",
    'contact.followMe': "Follow me on social media to stay updated with my latest projects and thoughts on web development.",
    'contact.name': "Name",
    'contact.email': "Email",
    'contact.subject': "Subject",
    'contact.message': "Message",
    'contact.send': "Send Message",
    'contact.sending': "Sending...",
    'contact.success': "Thank you! Your message has been sent successfully.",
    'contact.error': "Sorry, there was an error sending your message. Please try again.",
    'contact.placeholder.name': "Your full name",
    'contact.placeholder.email': "your.email@example.com",
    'contact.placeholder.subject': "What's this about?",
    'contact.placeholder.message': "Tell me about your project or just say hello!",
    'contact.quickLinks': "Quick Links",
    'contact.aboutMe': "About Me",
    'contact.myProjects': "My Projects",
    'contact.alwaysOpen': "Always open to interesting conversations and opportunities.",
    'contact.brand': "Thang",
    'contact.brandDesc': "Software Engineer passionate about creating beautiful, functional applications that make a difference.",
  },
  vi: {
    'hero.title': "Xin chào, tôi là Thắng",
    'hero.subtitle': "Kỹ Sư Phần Mềm | Đam mê xây dựng ứng dụng thân thiện người dùng",
    'hero.description': "Tôi tạo ra các ứng dụng hiện đại, responsive sử dụng React, Next.js, TypeScript và các công nghệ khác. Luôn háo hức học công nghệ mới và giải quyết vấn đề phức tạp thông qua code sạch, hiệu quả.",
    'hero.viewWork': "Xem Dự Án",
    'hero.contactMe': "Liên Hệ",
    'skills.title': "Công Nghệ Tôi Sử Dụng",
    'nav.home': "Trang Chủ",
    'nav.about': "Giới Thiệu",
    'nav.projects': "Dự Án",
    'nav.contact': "Liên Hệ",
    'footer.visitors': "Lượt Truy Cập",
    'footer.madeWith': "Được tạo với",
    'footer.using': "Next.js & Tailwind CSS",
    'about.title': "Giới Thiệu",
    'about.subtitle': "Tìm hiểu thêm về tôi",
    'about.description': "Tôi là một kỹ sư phần mềm đam mê với nền tảng vững chắc về các công nghệ phát triển phần mềm hiện đại. Tôi thích tạo ra những ứng dụng đẹp, chức năng giải quyết các vấn đề thực tế.",
    'about.experience': "Kinh Nghiệm",
    'about.education': "Học Vấn",
    'about.skills': "Kỹ Năng",
    'about.interests': "Sở Thích",
    'about.contact': "Liên Hệ",
    'about.intro': "Xin chào! Tôi là Thắng, một kỹ sư phần mềm đam mê sống tại Thành phố Hồ Chí Minh, Việt Nam. Tôi khám phá tình yêu lập trình trong thời gian học đại học và đã cống hiến để tạo ra những giải pháp phần mềm tuyệt vời từ đó.",
    'about.journey': "Hành trình của tôi bắt đầu với những kiến thức cơ bản về lập trình và tôi nhanh chóng yêu thích phát triển phần mềm. Tôi thích khía cạnh giải quyết vấn đề của phát triển và sự hài lòng khi biến ý tưởng thành hiện thực thông qua code.",
    'about.personal': "Khi không code, bạn có thể tìm thấy tôi khám phá các quán cà phê mới, đi bộ đường mòn địa phương, hoặc đóng góp cho các dự án mã nguồn mở. Tôi luôn háo hức học công nghệ mới và hợp tác với các lập trình viên khác.",
    'about.funFacts': "Sự Thật Thú Vị",
    'about.coffee': "Tách cà phê mỗi tuần",
    'about.languages': "Ngôn ngữ lập trình",
    'about.passion': "Đam mê học hỏi",
    'about.badges.coffee': "Người Yêu Cà Phê",
    'about.badges.hiking': "Người Yêu Leo Núi",
    'about.badges.opensource': "Người Đóng Góp Mã Nguồn Mở",
    'about.badges.learner': "Người Học Liên Tục",
    'about.badges.solver': "Người Giải Quyết Vấn Đề",
    'about.interests.cleanCode': "Code Sạch",
    'about.interests.cleanCodeDesc': "Viết code dễ bảo trì và dễ đọc",
    'about.interests.uiux': "Thiết Kế UI/UX",
    'about.interests.uiuxDesc': "Tạo ra trải nghiệm người dùng đẹp mắt",
    'about.interests.performance': "Hiệu Suất",
    'about.interests.performanceDesc': "Tối ưu hóa tốc độ và hiệu quả",
    'about.interests.opensource': "Mã Nguồn Mở",
    'about.interests.opensourceDesc': "Đóng góp cho cộng đồng lập trình viên",
    'about.interests.flutter': "Phát Triển Mobile",
    'about.interests.flutterDesc': "Xây dựng ứng dụng mobile đa nền tảng",
    'projects.title': "Dự Án Của Tôi",
    'projects.subtitle': "Đây là một số dự án tôi đã làm. Mỗi dự án đại diện cho một hành trình học tập và thể hiện các khía cạnh khác nhau của kỹ năng phát triển của tôi.",
    'projects.featured': "Dự Án Nổi Bật",
    'projects.other': "Dự Án Khác",
    'projects.collaborate': "Quan Tâm Đến Việc Hợp Tác?",
    'projects.collaborateDesc': "Tôi luôn sẵn sàng thảo luận về các cơ hội mới và dự án thú vị. Hãy kết nối và xem chúng ta có thể tạo ra điều gì tuyệt vời cùng nhau!",
    'projects.getInTouch': "Liên Hệ",
    'projects.expenseTracker.title': "Ứng Dụng Theo Dõi Chi Tiêu",
    'projects.expenseTracker.desc': "Ứng dụng theo dõi chi tiêu full-stack với xác thực người dùng, quản lý danh mục và phân tích chi tiết. Được xây dựng với React, Node.js và MongoDB.",
    'projects.weather.title': "Bảng Điều Khiển Thời Tiết",
    'projects.weather.desc': "Ứng dụng thời tiết responsive hiển thị điều kiện hiện tại và dự báo 5 ngày. Có tính năng tìm kiếm vị trí và hoạt ảnh thời tiết đẹp mắt.",

    'projects.portfolio.title': "Website Portfolio",
    'projects.portfolio.desc': "Chính website này! Portfolio responsive được xây dựng với Next.js, có chế độ tối, hoạt ảnh mượt mà và hiệu suất tối ưu.",
    'projects.ecommerce.title': "Cửa Hàng Thương Mại Điện Tử",
    'projects.ecommerce.desc': "Nền tảng thương mại điện tử hiện đại với danh mục sản phẩm, giỏ hàng, tích hợp thanh toán và bảng điều khiển admin để quản lý hàng tồn kho.",
    'contact.title': "Liên Hệ",
    'contact.subtitle': "Tôi rất muốn nghe từ bạn! Dù bạn có dự án trong đầu, muốn hợp tác, hay chỉ muốn chào hỏi, hãy thoải mái liên hệ.",
    'contact.sendMessage': "Gửi Tin Nhắn Cho Tôi",
    'contact.contactInfo': "Thông Tin Liên Hệ",
    'contact.connectWithMe': "Kết Nối Với Tôi",
    'contact.letsCollaborate': "Hãy Hợp Tác",
    'contact.alwaysInterested': "Tôi luôn quan tâm đến:",
    'contact.frontendDev': "Dự án phát triển frontend",
    'contact.openSource': "Đóng góp mã nguồn mở",
    'contact.learning': "Cơ hội học tập",
    'contact.mentorship': "Mentorship và networking",
    'contact.followMe': "Theo dõi tôi trên mạng xã hội để cập nhật các dự án mới nhất và suy nghĩ về phát triển web.",
    'contact.name': "Tên",
    'contact.email': "Email",
    'contact.subject': "Tiêu Đề",
    'contact.message': "Tin Nhắn",
    'contact.send': "Gửi Tin Nhắn",
    'contact.sending': "Đang Gửi...",
    'contact.success': "Cảm ơn! Tin nhắn của bạn đã được gửi thành công.",
    'contact.error': "Xin lỗi, có lỗi khi gửi tin nhắn. Vui lòng thử lại.",
    'contact.placeholder.name': "Họ tên đầy đủ của bạn",
    'contact.placeholder.email': "email.của.bạn@example.com",
    'contact.placeholder.subject': "Về việc gì?",
    'contact.placeholder.message': "Kể cho tôi về dự án của bạn hoặc chỉ chào hỏi!",
    'contact.quickLinks': "Liên Kết Nhanh",
    'contact.aboutMe': "Giới Thiệu",
    'contact.myProjects': "Dự Án Của Tôi",
    'contact.alwaysOpen': "Luôn mở cửa cho những cuộc trò chuyện và cơ hội thú vị.",
    'contact.brand': "Thắng",
    'contact.brandDesc': "Kỹ Sư Phần Mềm đam mê tạo ra những ứng dụng đẹp, chức năng tạo nên sự khác biệt.",
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [visitorCount, setVisitorCount] = useState(0)
  const [hasIncremented, setHasIncremented] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load visitor count from API
    const loadVisitorCount = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/visitors', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setVisitorCount(data.count)
      } catch (error) {
        console.error('Failed to load visitor count:', error)
        // Fallback to 0 if API fails
        setVisitorCount(0)
      } finally {
        setIsLoading(false)
      }
    }

    loadVisitorCount()
  }, [])

  const incrementVisitor = async () => {
    if (hasIncremented || isLoading) return // Prevent multiple increments

    try {
      const response = await fetch('/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setVisitorCount(data.count)
      setHasIncremented(true)
    } catch (error) {
      console.error('Failed to increment visitor count:', error)
    }
  }

  return (
    <VisitorContext.Provider value={{ visitorCount, incrementVisitor }}>
      {children}
    </VisitorContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useVisitor() {
  const context = useContext(VisitorContext)
  if (context === undefined) {
    throw new Error('useVisitor must be used within a VisitorProvider')
  }
  return context
} 