export const getConstructedMenuData = (customNavigationBy) => {
     const {
    logo = [],
    navItems = [],
    contactInfo = [],
    footerLinks = [],
    footerPrimaryLogo = "",
    footerCompanyTitle = "",
    footerCompanyDescription = "",
    footerAddress = "",
    footerEmail = "",
    footerSocialLinks = [],
    footerPhoneNumbers = [],
    footerCopyright = ""
  } = customNavigationBy;
  
    const navbarData = {
      logo: {
        primary_logo: logo?.[0]?.primary_logo || "",
        secondary_logo: logo?.[0]?.secondary_logo || ""
      },
      nav_items: navItems?.map(item => ({
        label: item.label,
        link: item.link,
        children: item.children || []
      })) || [],
      contact_info: contactInfo?.map(info => ({
        label: info.label,
        link: info.link,
        type: info.type?.value || ""
      })) || []
    };
  
    const footerData = {
      links: footerLinks?.map(link => {
        // Fix malformed links where label and link are swapped
        if (link.link?.startsWith("/")) {
          return link;
        } else {
          return {
            label: link.link,
            link: link.label
          };
        }
      }) || [],
      logo: {
        primary_logo: footerPrimaryLogo || ""
      },
      company_info: {
        title: footerCompanyTitle,
        description: footerCompanyDescription
      },
      contact_info: {
        address: footerAddress,
        email: footerEmail,
        phone_numbers: footerPhoneNumbers?.map(phone => phone.number) || [],
        social_links: (footerSocialLinks || []).reduce((acc, curr) => {
          acc[curr.platform] = curr.link;
          return acc;
        }, {})
      },
      copyright: {
        text: footerCopyright
      }
    };
  
    return { navbarData, footerData };
  };
  