# 🧪 Technical Test – Report

## ✅ Approach

I started by reviewing documentation to refresh my knowledge of native PHP and JavaScript.

I chose **not to use any frameworks**, as the project was simple and I didn’t want to spend time setting one up unnecessarily.

I referred to documentation and online resources, particularly for the checkbox filtering function. The code of this part is not the easiest to read, but it works.

I chose to avoid repetitions by sacrificing lisibility and simplicity...

---

## ⚠️ Difficulties

- Remembering how to use native functions, as I’m more used to work with frameworks.
- Time management: I’m a bit disappointed because I struggled with simple functionalities and feel I could have done more.
- Stop coding, the code can always be better.

---

## 💡 Suggestions

- If there were many filters and a large amount of data, it would be worth considering **server-side filtering** for better performance and scalability
- Language managment
- Use a framework to avoid write native code, can be difficult to read...
- Use a proper tailwind in a proper way to have the logic in CSS file and simplify the HTML
```css
/* style.css */
.btn-filter {
  @apply flex gap-1 items-center self-end border border-black px-28 py-2;
}

.filter-section {
  @apply flex items-center px-2 py-5 border-t border-solid cursor-pointer select-none border-t-black;
}
```
- Use template manager or use typescript components for repeated part to avoid what I've done... (duplicate in JS and change ID)
- Add unit tests if the code needs to be maintained or migrated in the future

## Note

The provided HTML wasn’t fully aligned with the mockups. I decided to remove the title since it wasn’t present in the mockup, though I’m not sure if that was the expected behavior.

The filter icon isn’t exactly like the one in the mockup — I chose this alternative, and I hope it's acceptable.