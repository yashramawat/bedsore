const posts = [
  { title: "How to Choose a High-Impact Thesis Topic in Clinical Medicine", category: "Thesis Writing" },
  { title: "Synopsis Blueprint: Structure Your Proposal Like a Journal Protocol", category: "Synopsis" },
  { title: "Sample Size Basics for PG Dissertations", category: "Statistics" },
  { title: "Understanding p-Values, Confidence Intervals, and Clinical Significance", category: "Statistics" },
  { title: "Common Research Design Errors in Residency Thesis Projects", category: "Research Methodology" },
  { title: "STROBE, CONSORT, PRISMA: Which Reporting Guideline Do You Need?", category: "Publication" },
  { title: "Writing a Defensible Literature Review for Nursing Scholars", category: "Thesis Writing" },
  { title: "Data Collection Forms That Reduce Bias and Missing Data", category: "Research Methodology" },
  { title: "How to Respond to Journal Reviewer Comments Professionally", category: "Publication" }
];

const postGrid = document.getElementById("postGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = [...document.querySelectorAll(".cat-btn")];
let activeCategory = "all";

function renderPosts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = posts.filter((post) => {
    const inCategory = activeCategory === "all" || post.category === activeCategory;
    const inSearch = post.title.toLowerCase().includes(keyword) || post.category.toLowerCase().includes(keyword);
    return inCategory && inSearch;
  });

  postGrid.innerHTML = filtered.length
    ? filtered
        .map(
          (post) => `
          <article class="post-card">
            <span class="post-meta">${post.category}</span>
            <h3>${post.title}</h3>
            <p>Practical, evidence-oriented guidance tailored for medical and nursing academics.</p>
          </article>`
        )
        .join("")
    : `<p>No matching posts found. Try another title keyword or category.</p>`;
}

searchInput.addEventListener("input", renderPosts);
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderPosts();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
renderPosts();
