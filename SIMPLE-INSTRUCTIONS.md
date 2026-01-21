# Simple Copy-Paste Instructions for GoHighLevel

## You Have 3 Complete Files Ready:

1. **qualifier-complete.html** - Landing page (Are you a Sales Rep or Business Owner?)
2. **sales-rep-complete.html** - Sales Rep training page
3. **business-owner-complete.html** - Business Owner services page

---

## How to Use in GoHighLevel:

### Step 1: Create 3 Pages in GoHighLevel

1. Go to Sites → Funnels (or Pages)
2. Create a new page called "Welcome"
3. Create another page called "Sales Reps"
4. Create another page called "Business Owners"

### Step 2: Add the HTML Code

**For the Welcome page:**
1. Open `qualifier-complete.html`
2. Select ALL the code (Ctrl+A or Cmd+A)
3. Copy it (Ctrl+C or Cmd+C)
4. In GoHighLevel, add a "Custom HTML" element
5. Paste the entire code
6. Save

**For the Sales Reps page:**
1. Open `sales-rep-complete.html`
2. Copy ALL the code
3. In GoHighLevel "Sales Reps" page, add "Custom HTML" element
4. Paste the entire code
5. Save

**For the Business Owners page:**
1. Open `business-owner-complete.html`
2. Copy ALL the code
3. In GoHighLevel "Business Owners" page, add "Custom HTML" element
4. Paste the entire code
5. Save

---

## Step 3: Update the Navigation Links

### In qualifier-complete.html (line 317-318):

Find this:
```javascript
window.location.href = 'sales-rep-complete.html';
```

Replace with your actual Sales Rep page URL from GoHighLevel

Find this:
```javascript
window.location.href = 'business-owner-complete.html';
```

Replace with your actual Business Owner page URL from GoHighLevel

### In both sales-rep and business-owner pages:

Find all instances of `href="#book"` and replace with your actual calendar booking link from GoHighLevel.

---

## That's It!

You now have:
- ✅ A qualifying landing page that splits traffic
- ✅ A sales rep training page
- ✅ A business owner services page
- ✅ All styling and JavaScript built-in
- ✅ Fully responsive mobile design
- ✅ Smooth animations and interactions

---

## Quick Customization:

### Change Colors:
Open the HTML file and find the `:root` section at the top (around line 15-20). Change the color values:

```css
:root {
    --bg-dark: #0a0a0a;        /* Main background */
    --bg-card: #1a1a1a;        /* Card backgrounds */
    --text-white: #ffffff;     /* White text */
    --text-gray: #a0a0a0;      /* Gray text */
    --accent-green: #34d399;   /* Green accent */
    --accent-blue: #60a5fa;    /* Blue accent */
}
```

### Change Text:
Just search for the text you want to change in the HTML file and replace it directly.

### Add Videos:
Find the video placeholders and replace with your YouTube embed code or video URL.

---

## Need Help?

- All three files are self-contained (no external dependencies)
- They work in any modern browser
- Fully responsive on mobile, tablet, and desktop
- Just copy, paste, and customize!
