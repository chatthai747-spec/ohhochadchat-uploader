// OhhoChadchat Uploader - Bilingual (EN / TH) Language Engine
(function() {
    const translations = {
        en: {
            // Brand & Navigation
            system_name: "OhhoChadchat Uploader",
            badge_inhouse: "In-House",
            nav_home: "Home",
            nav_features: "Features",
            nav_privacy: "Privacy Policy",
            footer_copy: "© 2026 Ohho Chadchat Channel. All Rights Reserved.",
            footer_note: "OhhoChadchat Uploader — In-House Private Content Pipeline",

            // Index Page (Home)
            tagline_home: "::: Private In-House Media Engine :::",
            hero_title_1: "STREAMLINE YOUR",
            hero_title_2: "CONTENT DELIVERY",
            hero_desc: "In-House Media Automation Utility engineered and developed exclusively for <strong>Ohho Chadchat</strong> channel. Orchestrates queues, centralizes metadata, and synchronizes direct platform APIs to YouTube, Facebook, and TikTok from the primary editing workstation.",
            cta_features: "Explore Features ➜",
            cta_privacy: "View Compliance Doc",
            banner_title: "Ohho Chadchat Production Environment",
            banner_desc: "Desktop automation system connecting to official APIs for internal studio production.",
            channels_pill: "Identity Verification & Channel Hubs",
            channels_title: "Official Ohho Chadchat Channels",
            yt_title: "YouTube Channel",
            yt_desc: "Publishing high-resolution long-form videos and YouTube Shorts for variety and gaming series.",
            yt_btn: "▶️ Visit YouTube Channel",
            fb_title: "Facebook Page",
            fb_desc: "Official page for community updates, video highlights, and Facebook Reels connecting directly with followers.",
            fb_btn: "📘 Visit Facebook Page",
            tt_title: "TikTok Official",
            tt_desc: "Short-form vertical video channel integrated via TikTok Content Posting API.",
            tt_btn: "🎵 Visit TikTok Profile",
            pillar1_title: "In-House Windows App",
            pillar1_desc: "Runs directly on primary editing workstations as a standalone client without intermediary web servers.",
            pillar2_title: "Zero Public Access",
            pillar2_desc: "Restricted strictly to the verified creator accounts of Ohho Chadchat with zero third-party exposure.",
            pillar3_title: "Smart Duration Analysis",
            pillar3_desc: "Auto-analyzes duration to filter and route Shorts, Reels, TikTok, and long-form video automatically.",

            // Features Page
            tagline_features: "::: Technical Architecture & Capabilities :::",
            features_title_1: "System",
            features_title_2: "Specifications & Routing",
            features_desc: "Technical architecture and automation logic for sorting, metadata formatting, and publishing Ohho Chadchat channel videos under a strict Local-First standard.",
            spec1_badge: "01",
            spec1_title: "Smart Duration Routing",
            spec1_tag: "Automated Pipeline Routing",
            spec1_desc: "Analyzes video duration offline on the editing workstation via FFprobe immediately upon selecting a file, intelligently routing content to the appropriate platform according to duration requirements.",
            spec1_short_pill: "Duration ≤ 180 Seconds (≤ 3 Minutes)",
            spec1_short_title: "Short-Form Multi-Distribution",
            spec1_short_lead: "Short-form clips are delivered simultaneously across all short-form platforms in one click:",
            spec1_short_item1: "YouTube Shorts (9:16 Vertical)",
            spec1_short_item2: "Facebook Reels (Creator API)",
            spec1_short_item3: "TikTok Video Publish (Content API)",
            status_unlocked: "✔ Unlocked",
            spec1_long_pill: "Duration > 180 Seconds (> 3 Minutes)",
            spec1_long_title: "Long-Form Dedicated Route",
            spec1_long_lead: "Long-form clips are strictly locked to primary long-form destinations while disabling short-form queues:",
            spec1_long_item1: "YouTube Main Long-Form Video",
            spec1_long_item2: "Facebook Reels (Excluded >3m)",
            spec1_long_item3: "TikTok Queue (Excluded >3m)",
            status_locked: "✔ Primary Route",
            status_disabled: "✘ Auto-Disabled",

            spec2_badge: "02",
            spec2_title: "Unified Metadata Engine",
            spec2_tag: "Centralized Content Management",
            spec2_desc: "Centralized Content Inspector allows the production team to manage Title, Description, Timestamps, and Hashtags in one unified window without switching between applications.",
            spec2_item1_title: "One-Stop Input Sync",
            spec2_item1_desc: "Enter titles and descriptions once; character limits and platform formats are adapted automatically.",
            spec2_item2_title: "Chapter Timestamps",
            spec2_item2_desc: "Full support for video chapters (00:00, 02:45) for YouTube descriptions without cluttering TikTok captions.",
            spec2_item3_title: "Smart Hashtag Processing",
            spec2_item3_desc: "Aggregates core channel hashtags #OhhoChadchat and places them properly based on platform requirements.",

            spec3_badge: "03",
            spec3_title: "Local-First Security Architecture",
            spec3_tag: "Zero Cloud Exposure & Safe Tokens",
            spec3_desc: "Security architecture engineered around Local-First principles, dedicated exclusively to studio workstations.",
            spec3_item1_title: "Offline Token Storage",
            spec3_item1_desc: "OAuth Refresh & Access Tokens are encrypted and stored 100% locally strictly on Ohho Chadchat's internal production workstations.",
            spec3_item2_title: "Authorized API Endpoints",
            spec3_item2_desc: "Content publishing requests are processed via authorized official API endpoints provided by Google, Meta, and TikTok.",
            spec3_item3_title: "Zero Public Telemetry",
            spec3_item3_desc: "No analytics tracking, user behavior monitoring, or forwarding of video data to external servers.",

            // Privacy Policy Page
            compliance_tag: "🛡️ TikTok & Meta API Compliance Document",
            privacy_title_1: "Privacy Policy &",
            privacy_title_2: "Terms of Service",
            privacy_meta: "Effective Date: September 2026 • Scope: In-House Production System • Single-Tenant Private Architecture",
            doc_intro_title: "Introduction & Personal-Use Scope",
            doc_intro_p1: "This Privacy Policy and Terms of Service document governs the operation of the <strong>OhhoChadchat Uploader</strong> (Content Delivery & Video Upload Automation System). This software is an in-house desktop automation utility engineered strictly for private editorial and channel publishing operations for the verified creator channel <strong>Ohho Chadchat</strong>.",
            doc_intro_callout: "<strong>Note for Platform Compliance Officers:</strong> This system is strictly for personal, in-house administration of our verified channels. It is NOT a public SaaS platform, multi-tenant service, or commercial product offered to third parties.",
            doc_s1_title: "1. Terms of Service & Non-Commercial Use",
            doc_s1_p: "The OhhoChadchat Uploader is proprietary software operated exclusively by the internal production team of Ohho Chadchat:",
            doc_s1_li1: "<strong>No Public Registration:</strong> There are no public user accounts, registrations, subscriptions, or fees.",
            doc_s1_li2: "<strong>Exclusive Channel Management:</strong> All uploaded videos, titles, and descriptions are proprietary creator assets owned by Ohho Chadchat.",
            doc_s1_li3: "<strong>Platform Terms Adherence:</strong> The application complies with TikTok Developer Terms, Meta Platform Terms, and YouTube Developer Policies.",
            doc_s2_title: "2. Data Collection and OAuth Scopes Usage",
            doc_s2_p: "The software requests explicit OAuth permissions from the channel administrator to perform automated video publishing:",
            scope1_title: "user.info.basic",
            scope1_desc: "TikTok API • Verify identity of authenticated channel",
            scope2_title: "video.upload",
            scope2_desc: "TikTok API • Upload video directly to the creator's drafts or feed.",
            scope3_title: "video.publish",
            scope3_desc: "TikTok API • Publish scheduled video clips to creator feed",
            doc_s2_tokens: "<strong>Local Offline Token Storage:</strong> All OAuth tokens (Access Tokens and Refresh Tokens) are encrypted and stored 100% locally strictly on Ohho Chadchat's internal production workstations. At no point are tokens or credentials transmitted to an external web server, cloud database, or third-party relay.",
            doc_s3_title: "3. Data Sharing & Retention",
            doc_s3_p: "We maintain an uncompromising privacy standard:",
            doc_s3_li1: "<strong>Zero Data Brokering:</strong> We do not sell, trade, rent, or share user data, channel analytics, or video files with any third party.",
            doc_s3_li2: "<strong>Authorized Official Endpoints:</strong> Videos and metadata are sent directly and securely to the official API endpoints of Google, Meta, and TikTok.",
            doc_s3_li3: "<strong>Immediate Revocation:</strong> Deleting the local configuration folder or revoking access via platform security settings immediately destroys all local session states.",
            doc_s4_title: "4. Official Contact Information",
            doc_s4_p: "For platform auditors, API review teams, or security questions, please contact our channel administration directly through our official verified platforms:",
            contact_yt: "YouTube Channel",
            contact_fb: "Facebook Page",
            contact_tt: "TikTok Profile"
        },
        th: {
            // Brand & Navigation
            system_name: "OhhoChadchat Uploader",
            badge_inhouse: "ใช้งานภายใน",
            nav_home: "หน้าแรก",
            nav_features: "ความสามารถระบบ",
            nav_privacy: "นโยบายความเป็นส่วนตัว",
            footer_copy: "© 2026 Ohho Chadchat Channel. สงวนลิขสิทธิ์ทั้งหมด",
            footer_note: "OhhoChadchat Uploader — ระบบอัตโนมัติสำหรับจัดการคิววิดีโอภายในสตูดิโอ",

            // Index Page (Home)
            tagline_home: "::: ระบบอัตโนมัติภายในสตูดิโอ :::",
            hero_title_1: "ยกระดับกระบวนการจัดส่ง",
            hero_title_2: "คอนเทนต์สู่ทุกแพลตฟอร์ม",
            hero_desc: "In-House Media Automation Utility ออกแบบและพัฒนาเพื่อรองรับกระบวนการจัดส่งวิดีโอของช่อง <strong>Ohho Chadchat</strong> โดยเฉพาะ ช่วยจัดการคิว รวบรวมข้อมูล Metadata และซิงค์ API สู่แพลตฟอร์มปลายทาง YouTube, Facebook และ TikTok จากเครื่องตัดต่อหลักโดยตรง",
            cta_features: "ดูความสามารถของระบบ ➜",
            cta_privacy: "เอกสารยื่นตรวจสิทธิ์ API",
            banner_title: "สภาพแวดล้อมการทำงานของ Ohho Chadchat",
            banner_desc: "ระบบ Desktop Automation เชื่อมต่อ API ทางการสำหรับการทำงานภายในสตูดิโอ",
            channels_pill: "การยืนยันตัวตนและช่องทางหลัก",
            channels_title: "ช่องทางทางการของ Ohho Chadchat",
            yt_title: "ช่อง YouTube",
            yt_desc: "เผยแพร่วิดีโอหลักความละเอียดสูง วิดีโอยาว และ YouTube Shorts รายการวาไรตี้และเกมมิ่งของช่อง",
            yt_btn: "▶️ ไปยังช่อง YouTube",
            fb_title: "เพจ Facebook",
            fb_desc: "เพจหลักสำหรับการโพสต์อัปเดต ไฮไลท์คลิป และวิดีโอสั้น Facebook Reels สื่อสารกับแฟนเพจ",
            fb_btn: "📘 ไปยังเพจ Facebook",
            tt_title: "TikTok ทางการ",
            tt_desc: "ช่องทางเผยแพร่คลิปแนวตั้งแบบสั้น (Short-form Video) เชื่อมต่อผ่าน TikTok Content Posting API",
            tt_btn: "🎵 ไปยังโปรไฟล์ TikTok",
            pillar1_title: "โปรแกรม Windows ภายใน",
            pillar1_desc: "รันบนเครื่องตัดต่อหลักของทีมงานโดยตรงแบบ Standalone ไม่ผ่าน Web Server ภายนอก",
            pillar2_title: "ไม่มีบุคคลภายนอกเข้าถึง",
            pillar2_desc: "สงวนสิทธิ์ใช้งานเฉพาะบัญชีผู้สร้างของช่อง Ohho Chadchat ปลอดภัย 100%",
            pillar3_title: "วิเคราะห์ความยาวอัตโนมัติ",
            pillar3_desc: "ตรวจวัดความยาวและคัดกรอง Shorts, Reels, TikTok และ Long-form อัตโนมัติ",

            // Features Page
            tagline_features: "::: สถาปัตยกรรมทางเทคนิคและความสามารถ :::",
            features_title_1: "ข้อกำหนดทางเทคนิค",
            features_title_2: "และระบบคัดกรองเส้นทาง",
            features_desc: "สถาปัตยกรรมและตรรกะระบบอัตโนมัติสำหรับคัดแยก ปรับแต่งเมทาดาต้า และเผยแพร่วิดีโอของช่อง Ohho Chadchat บนมาตรฐาน Local-First",
            spec1_badge: "01",
            spec1_title: "Smart Duration Routing",
            spec1_tag: "การคัดกรองปลายทางอัตโนมัติ",
            spec1_desc: "ระบบสแกนความยาวไฟล์วิดีโอ (Video Duration Analysis) ด้วย FFprobe เอนจินออฟไลน์ในเครื่องตัดต่อทันทีที่เลือกไฟล์ เพื่อแยกส่งเนื้อหาไปยังช่องทางที่ถูกต้องตามข้อกำหนดความยาวของแต่ละแพลตฟอร์ม",
            spec1_short_pill: "ความยาว ≤ 180 วินาที (≤ 3 นาที)",
            spec1_short_title: "Short-Form Multi-Distribution",
            spec1_short_lead: "คลิปสั้นถูกส่งต่อไปยังช่องทาง Short-form Content พร้อมกันในคลิกเดียว:",
            spec1_short_item1: "YouTube Shorts (วิดีโอแนวตั้ง 9:16)",
            spec1_short_item2: "Facebook Reels (ผ่าน Creator API)",
            spec1_short_item3: "TikTok Video Publish (ผ่าน Content API)",
            status_unlocked: "✔ ปลดล็อกพร้อมส่ง",
            spec1_long_pill: "ความยาว > 180 วินาที (> 3 นาที)",
            spec1_long_title: "Long-Form Dedicated Route",
            spec1_long_lead: "คลิปยาวจะถูกล็อกเป้าหมายเฉพาะวิดีโอตัวเต็ม และปิดปลายทางคลิปสั้นอัตโนมัติ:",
            spec1_long_item1: "YouTube Main Long-Form Video",
            spec1_long_item2: "Facebook Reels (เกิน 3 นาที)",
            spec1_long_item3: "TikTok Queue (เกิน 3 นาที)",
            status_locked: "✔ เส้นทางหลักคลิปยาว",
            status_disabled: "✘ ปิดการส่งอัตโนมัติ",

            spec2_badge: "02",
            spec2_title: "Unified Metadata Engine",
            spec2_tag: "การจัดการข้อมูลส่วนกลาง",
            spec2_desc: "หน้าต่างจัดการข้อมูลเมทาดาต้าแบบศูนย์รวม (Unified Content Inspector) ช่วยให้ทีมงานจัดการ Title, Description, Timestamps และ Tags ได้จากจุดเดียวโดยไม่ต้องสลับแอป",
            spec2_item1_title: "One-Stop Input Sync",
            spec2_item1_desc: "กรอกข้อมูลชื่อคลิปและคำอธิบายเพียงรอบเดียว ระบบตัดทอนความยาวให้ตรงตามขีดจำกัดแต่ละแพลตฟอร์ม",
            spec2_item2_title: "Chapter Timestamps",
            spec2_item2_desc: "รองรับระบบแบ่งช่วงเวลาคลิป (00:00, 02:45) สำหรับ YouTube โดยไม่สร้างปัญหาให้แคปชันของ TikTok",
            spec2_item3_title: "Smart Hashtag Processing",
            spec2_item3_desc: "รวบรวมแฮชแท็กหลักของช่อง #OhhoChadchat และวางตำแหน่งที่ถูกต้องตามข้อกำหนดของโซเชียลมีเดีย",

            spec3_badge: "03",
            spec3_title: "Local-First Security Architecture",
            spec3_tag: "ปลอดภัยสูงสุด ไม่ผ่านคลาวด์ตัวกลาง",
            spec3_desc: "ออกแบบสถาปัตยกรรมความปลอดภัยตามแนวคิด Local-First สำหรับการใช้งานบนเครื่องคอมพิวเตอร์ตัดต่อในสตูดิโอโดยเฉพาะ",
            spec3_item1_title: "Offline Token Storage",
            spec3_item1_desc: "OAuth Refresh & Access Tokens ถูกเข้ารหัสและจัดเก็บบนเครื่องคอมพิวเตอร์ตัดต่อภายในของทีมงาน Ohho Chadchat เท่านั้น",
            spec3_item2_title: "Authorized API Endpoints",
            spec3_item2_desc: "ยิงคำขอเผยแพร่คอนเทนต์ผ่านจุดเชื่อมต่อ API ทางการที่ได้รับอนุญาตจาก Google, Meta และ TikTok อย่างถูกต้อง",
            spec3_item3_title: "Zero Public Telemetry",
            spec3_item3_desc: "ไม่มีระบบ Analytics, ติดตามพฤติกรรม หรือส่งต่อข้อมูลวิดีโอออกสู่เซิร์ฟเวอร์ภายนอก",

            // Privacy Policy Page
            compliance_tag: "🛡️ เอกสารยื่นตรวจสอบสิทธิ์ API ของ TikTok & Meta",
            privacy_title_1: "นโยบายความเป็นส่วนตัวและ",
            privacy_title_2: "ข้อกำหนดการใช้งาน",
            privacy_meta: "มีผลบังคับใช้: กันยายน 2026 • ขอบเขต: ระบบภายในสตูดิโอ • สถาปัตยกรรมใช้งานส่วนบุคคล",
            doc_intro_title: "บทนำและขอบเขตการใช้งานส่วนบุคคล",
            doc_intro_p1: "เอกสารนโยบายความเป็นส่วนตัวและข้อกำหนดการให้บริการนี้ ครอบคลุมการทำงานของ <strong>OhhoChadchat Uploader</strong> (Content Delivery & Video Upload Automation System) ซึ่งเป็นโปรแกรม Desktop อัตโนมัติที่พัฒนาขึ้นเพื่อการใช้งานภายในของทีมงานช่อง <strong>Ohho Chadchat</strong> โดยเฉพาะ",
            doc_intro_callout: "<strong>หมายเหตุสำหรับเจ้าหน้าที่ตรวจสอบแพลตฟอร์ม:</strong> ซอฟต์แวร์นี้เป็นเครื่องมือส่วนบุคคลที่ใช้จัดการช่องที่ยืนยันตัวตนแล้วของเราเท่านั้น ไม่ใช่บริการแบบ SaaS สาธารณะ ไม่ใช่ Multi-tenant และไม่มีการเปิดให้บุคคลภายนอกใช้งาน",
            doc_s1_title: "1. ข้อกำหนดการให้บริการและการใช้งานที่ไม่ใช่เชิงพาณิชย์",
            doc_s1_p: "OhhoChadchat Uploader เป็นซอฟต์แวร์เฉพาะที่ใช้งานโดยทีมงานภายในของช่อง Ohho Chadchat เท่านั้น:",
            doc_s1_li1: "<strong>ไม่มีการลงทะเบียนสาธารณะ:</strong> ไม่มีการเปิดให้สมัครสมาชิก เก็บค่าธรรมเนียม หรือบริการแก่บุคคลภายนอก",
            doc_s1_li2: "<strong>การจัดการเฉพาะช่องทางการ:</strong> ไฟล์วิดีโอ ชื่อคลิป และรายละเอียดทั้งหมดเป็นทรัพย์สินคอนเทนต์ของช่อง Ohho Chadchat เอง",
            doc_s1_li3: "<strong>ปฏิบัติตามกฎระเบียบของแพลตฟอร์ม:</strong> โปรแกรมทำงานสอดคล้องกับ TikTok Developer Terms, Meta Platform Terms และ YouTube Developer Policies",
            doc_s2_title: "2. การเก็บข้อมูลและการใช้สิทธิ์ OAuth",
            doc_s2_p: "โปรแกรมร้องขอสิทธิ์ OAuth จากผู้ดูแลช่องเพื่อทำการเผยแพร่วิดีโอโดยอัตโนมัติตามที่สั่ง:",
            scope1_title: "user.info.basic",
            scope1_desc: "TikTok API • ยืนยันตัวตนของบัญชีผู้สร้างที่เชื่อมต่อ",
            scope2_title: "video.upload",
            scope2_desc: "TikTok API • อัปโหลดวิดีโอเข้าสู่แบบร่าง (Draft) หรือฟีดของผู้สร้างโดยตรง",
            scope3_title: "video.publish",
            scope3_desc: "TikTok API • เผยแพร่วิดีโอตามคิวที่กำหนดสู่ฟีดของผู้สร้าง",
            doc_s2_tokens: "<strong>การจัดเก็บ Token ในเครื่องแบบออฟไลน์:</strong> โทเค็น OAuth (Access Tokens และ Refresh Tokens) ถูกเข้ารหัสและจัดเก็บบนเครื่องคอมพิวเตอร์ตัดต่อภายในของทีมงาน Ohho Chadchat เท่านั้น ไม่มีการส่งต่อโทเค็นไปยังเซิร์ฟเวอร์ภายนอก ฐานข้อมูลคลาวด์ หรือตัวกลางใดๆ ทั้งสิ้น",
            doc_s3_title: "3. นโยบายการไม่เปิดเผยข้อมูลและการเก็บรักษา",
            doc_s3_p: "เรายึดมั่นในมาตรฐานความเป็นส่วนตัวอย่างเคร่งครัด:",
            doc_s3_li1: "<strong>ไม่มีการขายหรือแบ่งปันข้อมูล:</strong> เราไม่ขาย ให้เช่า หรือเผยแพร่ข้อมูลผู้ใช้ สถิติช่อง หรือไฟล์วิดีโอแก่บุคคลที่สาม",
            doc_s3_li2: "<strong>การเชื่อมต่อ API โดยตรง:</strong> วิดีโอและข้อมูลส่งตรงจากเครื่องไปยังเซิร์ฟเวอร์ API ทางการของ Google, Meta และ TikTok",
            doc_s3_li3: "<strong>การยกเลิกสิทธิ์ทันที:</strong> เมื่อลบโฟลเดอร์การตั้งค่าในเครื่อง หรือเพิกถอนสิทธิ์จากแพลตฟอร์ม Session ทั้งหมดจะถูกทำลายทันที",
            doc_s4_title: "4. ข้อมูลการติดต่ออย่างเป็นทางการ",
            doc_s4_p: "สำหรับเจ้าหน้าที่ตรวจสอบแพลตฟอร์มหรือทีมงานตรวจสอบ API สามารถติดต่อผู้ดูแลช่องได้โดยตรงผ่านช่องทางทางการ:",
            contact_yt: "ช่อง YouTube",
            contact_fb: "เพจ Facebook",
            contact_tt: "โปรไฟล์ TikTok"
        }
    };

    function applyLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        localStorage.setItem('ohho_lang', lang);
        document.documentElement.lang = lang;

        const dict = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Expose switchLanguage globally
    window.switchLanguage = function(lang) {
        applyLanguage(lang);
    };

    // Initialize on DOM Ready (Default: English)
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('ohho_lang') || 'en';
        applyLanguage(savedLang);
    });
})();
