# GoHighLevel Setup Guide

This guide explains how to implement the Growth Bloc website in GoHighLevel.

## Overview

You now have a complete 3-page website system:
1. **qualifier.html** - Landing page that splits traffic into two paths
2. **sales-rep.html** - Page for sales reps looking for training
3. **business-owner.html** - Page for business owners looking to scale

## File Structure

```
Website/
├── qualifier.html              # Entry point landing page
├── sales-rep.html             # Sales rep pathway
├── business-owner.html        # Business owner pathway
├── css/
│   ├── qualifier-styles.css
│   ├── sales-rep-styles.css
│   └── business-owner-styles.css
└── js/
    ├── qualifier.js
    ├── sales-rep.js
    └── business-owner.js
```

## GoHighLevel Implementation

### Option 1: Custom HTML Pages (Recommended)

1. **Create Three Custom Pages** in GoHighLevel:
   - Page 1: "Welcome" (for qualifier.html)
   - Page 2: "Sales Reps" (for sales-rep.html)
   - Page 3: "Business Owners" (for business-owner.html)

2. **For Each Page:**
   - Go to the page editor
   - Add a "Custom HTML/CSS" element
   - Copy the entire HTML file content
   - Paste it into the HTML section

3. **Add CSS:**
   - In the same custom element, click the CSS tab
   - Copy the corresponding CSS file content
   - Paste it into the CSS section

4. **Add JavaScript:**
   - Click the JavaScript tab
   - Copy the corresponding JS file content
   - Paste it into the JS section

5. **Update Links:**
   - In qualifier.js, update the navigation URLs:
     ```javascript
     if (pathType === 'sales-rep') {
         window.location.href = 'YOUR_GOHIGHLEVEL_SALES_REP_PAGE_URL';
     } else if (pathType === 'business-owner') {
         window.location.href = 'YOUR_GOHIGHLEVEL_BUSINESS_OWNER_PAGE_URL';
     }
     ```

### Option 2: Funnel Setup

1. **Create a Funnel** with 3 steps:
   - Step 1: Qualifier page
   - Step 2: Sales Rep page
   - Step 3: Business Owner page

2. **Set up each step** using the custom HTML method above

3. **Configure navigation** between pages using GoHighLevel's built-in funnel navigation

## Customization Guide

### Update Business Name & Branding

**Qualifier Page:**
- No branding on qualifier (intentionally minimal)

**Sales Rep Page (sales-rep.html):**
- Line 18: Update logo SVG or replace with image
- Line 82: Update hero title
- Line 83: Update hero subtitle

**Business Owner Page (business-owner.html):**
- Line 18: Update logo SVG or replace with image
- Line 82: Update hero title
- Line 83: Update hero subtitle

### Update Colors

**Qualifier Page (qualifier-styles.css):**
- Background is black by default
- Button hover colors: Lines 177-184

**Sales Rep Page (sales-rep-styles.css):**
- Lines 9-15: CSS variables for colors
- Change `--bg-dark`, `--bg-card`, `--text-white`, etc.

**Business Owner Page (business-owner-styles.css):**
- Lines 9-16: CSS variables for colors
- `--accent-green` and `--accent-blue` control the gradient colors

### Add Background Image to Qualifier

In `qualifier-styles.css`, line 40:
```css
.background-image {
    background-image: url('YOUR_IMAGE_URL_HERE');
}
```

Upload an image to GoHighLevel media library and use that URL.

### Add Video Testimonials

**For Sales Rep Page:**
1. Find the video placeholder divs (lines 159-199 in sales-rep.html)
2. Replace with GoHighLevel video embed code or YouTube embeds:
```html
<div class="video-wrapper">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
</div>
```

### Update Contact Information

**Sales Rep Page:**
- Navigation link to booking calendar (line 28)
- CTA button links (line 218)

**Business Owner Page:**
- Navigation link to booking calendar (line 28)
- CTA button links (line 263)

Replace `href="#book"` with your GoHighLevel calendar booking link.

### Add Real Stats

**Business Owner Page (business-owner.html):**
- Lines 187-202: Update the statistics
- Lines 206-227: Update case studies with real client results

## Testing Checklist

- [ ] Qualifier page loads correctly
- [ ] "Sales Rep" button navigates to sales rep page
- [ ] "Business Owner" button navigates to business owner page
- [ ] Mobile menu works on all pages
- [ ] All navigation links work
- [ ] CTA buttons link to correct booking pages
- [ ] Videos play (if added)
- [ ] All content is updated with your information
- [ ] Page loads fast
- [ ] Responsive design works on mobile

## Mobile Optimization

All pages are fully responsive and include:
- Hamburger menu for mobile devices
- Optimized font sizes for small screens
- Touch-friendly buttons
- Proper viewport settings

## Performance Tips

1. **Optimize Images:**
   - Compress images before uploading
   - Use WebP format when possible
   - Recommended max size: 200KB per image

2. **Minimize Code:**
   - GoHighLevel may automatically minify
   - If not, use online CSS/JS minifiers

3. **Test Speed:**
   - Use Google PageSpeed Insights
   - Aim for 90+ score on mobile

## Support & Customization

### Common Issues

**Issue:** Links don't work
**Solution:** Make sure to update the JavaScript navigation URLs with your actual GoHighLevel page URLs

**Issue:** Mobile menu doesn't open
**Solution:** Check that JavaScript is enabled and loaded properly

**Issue:** Styling looks different in GoHighLevel
**Solution:** Some GoHighLevel templates may have global CSS conflicts. Use more specific CSS selectors or add `!important` flags

### Need Help?

- Review the HTML structure
- Check browser console for JavaScript errors
- Verify all URLs are correct
- Test on different devices

## Next Steps

1. Set up your GoHighLevel calendar booking system
2. Connect your CRM for lead capture
3. Set up email/SMS automation sequences
4. Add tracking pixels (Facebook, Google Analytics)
5. A/B test different headlines and CTAs
6. Monitor conversion rates and optimize

---

**Created for Growth Bloc**
Version 1.0 - 2024
