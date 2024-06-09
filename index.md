---
title: Home
layout: default
nav_order: 1
---

![Badgelife Banner](assets/images/badge-life-logo-banner.png)

# Welcome to BadgeLife!

Welcome to **BadgeLife**, the place for all things electronic badges! Dive into the archive, stay updated with the latest badge news, access a variety of maker resources to enhance your badge-making journey, and get in touch with other like-minded people to ask questions, learn, and contribute.

## Explore the Collection

### 📚 The Badge Archive

Discover detailed information about a wide range of electronic badges:
- **Pictures:** High-quality images showcasing badge designs.
- **Schematics:** Circuit diagrams and technical drawings.
- **Source Code:** Firmware and software behind the badges.

Visit the [Badge Archive](/archive/archive) to explore more.

## Stay Updated

### 🆕 New and Upcoming Badges

Stay on top of the latest badge innovations in our [New Badges](archive/dc32/dc32) section:
- **Announcements:** Information on new and upcoming badges.
- **Submit Your Badge:** Share your DC32 badge information using the submission form [here](https://t.co/UhN5iChYvH) (credit: K4rm4ness).
- **Curated Lists:** View the latest curated list [here](https://t.co/JUbgMb3Lze) (credit: K4rm4ness).

Check out the [DC32 Badges](archive/dc32/dc32) page for more details.

## Maker Resources

Access essential resources to support your badge-making:
- **📝 Unofficial Specifications:** Detailed specs developed and within by our community.
- **📚 Guides & Best Practices:** Practical guides and tips shared by experienced makers.

## Get Involved

### 🛠 Contribute

Join our community and contribute:
- **Join Discussions:** Join the discords and participate in conversations about badge projects and concepts.
- **Submit Your Badge:** Have a badge you'd like to add? Submit a pull request with source code, schematics, or links to badge repos. Contribution instructions are available [here](https://github.com/badgelife/website).

## Latest Blog Posts

Catch up on recent articles and updates:

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## Join Us

We’re always looking for new members to join our vibrant community. Whether you’re a seasoned badge creator or just getting started, there’s a place for you here:
- **[Join the Badge Life Discord](https://discord.gg/your-invite-link)** 
- **[Join the Maker Village Discord](https://discord.gg/BrMRmAAMYv)**
