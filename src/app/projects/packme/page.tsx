"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const slides: {
  label: string;
  lofi: string;
  hifi: string;
  lofiDescription: React.ReactNode;
  hifiDescription: React.ReactNode;
}[] = [
  {
    label: "Add Trip",
    lofi: "/projects/carry/Add_LoFi.png",
    hifi: "/projects/carry/Add_HiFi.png",
    lofiDescription: (
      <>
        I kept the trip setup to four focused fields (destination, dates,
        guests, and activities) so users could get started{" "}
        <strong>without friction</strong>. The goal was a clear, linear flow
        before generating the list.
      </>
    ),
    hifiDescription: (
      <>
        I redesigned the form so every choice feels{" "}
        <strong>deliberate and visible</strong>. Cards replace plain fields,
        and activity tags make trip type selection immediate. Users arrive at
        the list feeling certain about what they entered.
      </>
    ),
  },
  {
    label: "Create List",
    lofi: "/projects/carry/Create_LoFi.png",
    hifi: "/projects/carry/Create_HiFi.png",
    lofiDescription: (
      <>
        I structured the review screen around{" "}
        <strong>categories and weather context</strong> from the start. Users
        can scan every generated item by section before committing, so nothing
        feels like a surprise.
      </>
    ),
    hifiDescription: (
      <>
        Users hesitated before confirming the generated list. Adding{" "}
        <strong>trip context and live weather data at the top</strong> gave
        them the information they needed to feel confident before hitting
        create.
      </>
    ),
  },
  {
    label: "Edit List",
    lofi: "/projects/carry/Edit_Lofi.png",
    hifi: "/projects/carry/Edit_Hifi.png",
    lofiDescription: (
      <>
        A grid of item tiles per category with a + button and selected items
        highlighted. <strong>Category tabs at the top</strong> let users switch
        sections without losing context.
      </>
    ),
    hifiDescription: (
      <>
        In testing, users scrolling through the item grid{" "}
        <strong>lost access to the Add button</strong> the moment they moved
        past the first tile. I moved it to a fixed position at the bottom so
        it stays reachable at any point in the list, without breaking the flow.
      </>
    ),
  },
  {
    label: "My Lists",
    lofi: "/projects/carry/MyList_Lofi.png",
    hifi: "/projects/carry/MyList_Hifi.png",
    lofiDescription: (
      <>
        A simple list of all saved pack lists, each showing destination, dates,
        and activities. I prioritised{" "}
        <strong>scannability and clear hierarchy</strong> so users can jump to
        the right trip quickly.
      </>
    ),
    hifiDescription: (
      <>
        Users with multiple trips had no way to separate what was coming from
        what had passed. <strong>Upcoming and Passed tabs</strong> brought
        immediate order to the list. I also added a{" "}
        <strong>packing progress bar to each card</strong> after testing showed
        users kept opening lists just to check how far along they were.
      </>
    ),
  },
  {
    label: "Checklist",
    lofi: "/projects/carry/Checklist_Lofi.png",
    hifi: "/projects/carry/Checklist_Hifi.png",
    lofiDescription: (
      <>
        I structured the packing view with{" "}
        <strong>collapsible categories and a progress bar</strong> so users
        always know how far along they are. A weather strip was included for
        day-by-day context.
      </>
    ),
    hifiDescription: (
      <>
        During testing, users <strong>lost track of who they were packing
        for and which activities</strong> were planned once they entered the
        checklist. I added a destination header with trip details so that
        context is always visible at the top.
      </>
    ),
  },
  {
    label: "Profile",
    lofi: "/projects/carry/Profile_Lofi.png",
    hifi: "/projects/carry/Profile_Hifi.png",
    lofiDescription: (
      <>
        The first iteration kept the profile intentionally bare, just a
        photo and name, to establish the screen&apos;s place in the flow{" "}
        <strong>before deciding what content belonged there</strong>.
      </>
    ),
    hifiDescription: (
      <>
        Early testers found it frustrating to re-add the same essentials for
        every new trip. Introducing a{" "}
        <strong>personal default list in the profile</strong> eliminated that
        friction and made repeat use feel effortless.
      </>
    ),
  },
];

export default function CarryPage() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const onJourneyMouseDown = (e: React.MouseEvent) => {
    if (!journeyRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - journeyRef.current.offsetLeft;
    scrollLeftRef.current = journeyRef.current.scrollLeft;
    journeyRef.current.style.cursor = "grabbing";
  };

  const onJourneyMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !journeyRef.current) return;
    e.preventDefault();
    const x = e.pageX - journeyRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    journeyRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const onJourneyMouseUp = () => {
    isDragging.current = false;
    if (journeyRef.current) journeyRef.current.style.cursor = "grab";
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const prev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setSlideIndex((i) => Math.min(slides.length - 1, i + 1));

  const swipeTouchStartX = useRef(0);
  const onSlideTouch = (e: React.TouchEvent) => {
    swipeTouchStartX.current = e.touches[0].clientX;
  };
  const onSlideTouchEnd = (e: React.TouchEvent) => {
    const delta = swipeTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  return (
    <main>
      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <div className={`${styles.heroPhone} ${styles.heroPhoneOuter}`}>
            <Image
              src="/projects/carry/Start1.png"
              alt="Carry onboarding screen 1"
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>
          <div className={`${styles.heroPhone} ${styles.heroPhoneInner}`}>
            <Image
              src="/projects/carry/Add_HiFi.png"
              alt="Carry add trip screen"
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>
          <div className={`${styles.heroPhone} ${styles.heroPhoneCenter}`}>
            <Image
              src="/projects/carry/Checklist_Hifi.png"
              alt="Carry checklist screen"
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>
          <div className={`${styles.heroPhone} ${styles.heroPhoneInner}`}>
            <Image
              src="/projects/carry/MyList_Hifi.png"
              alt="Carry my lists screen"
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>
          <div className={`${styles.heroPhone} ${styles.heroPhoneOuter}`}>
            <Image
              src="/projects/carry/Start2.png"
              alt="Carry onboarding screen 2"
              fill
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT INFO ──────────────────────────── */}
      <section className={styles.info}>
        <div className={styles.infoGrid}>
          <div className={styles.infoRow}>
            <h3 className={styles.infoLabel}>Role</h3>
            <p>
              UX Designer. Conducted user research, wireframing, and
              prototyping.
            </p>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.infoLabel}>Project Duration</h3>
            <p>30.04.2026 – 02.06.2026</p>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.infoLabel}>Responsibilities</h3>
            <ul className={styles.bulletList}>
              <li>Conduct user research</li>
              <li>Define the problem</li>
              <li>Define personas &amp; user journey</li>
              <li>
                Visual design of low-fi and high-fi wireframes, prototypes and
                user testing
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ctaRow}>
          <a
            href="https://www.figma.com/proto/mXMsgA0dVKrqRC43OmeFke/Ideas?node-id=2254-1996&viewport=-3565%2C-723%2C0.18&t=16DCcibwqGqmhJuH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2254%3A1996&show-proto-sidebar=1&page-id=96%3A598"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            VIEW FINAL PROTOTYPE
          </a>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ───────────────────────────── */}
      <section className={styles.problemAndGoal}>
        <div className={styles.problemLeft}>
          <h2 className={styles.sectionLabel}>The Problem</h2>
          <p>
            Travelers struggle to pack efficiently, especially when traveling
            with family. Planning what to bring requires{" "}
            <strong>coordinating multiple people&apos;s needs</strong>,
            researching destinations, and remembering everything without a
            reliable system. Most travelers rely on{" "}
            <strong>scattered notes or generic lists</strong> that don&apos;t
            account for their specific trip context.
          </p>
          <p>
            What to pack changes entirely depending on{" "}
            <strong>where you&apos;re going, what the weather will be like,
            and what you&apos;ll actually be doing.</strong> A beach holiday,
            a hiking trip, and a city break all demand completely different
            bags. Without a system that adapts to those variables, travelers
            are left guessing.
          </p>
        </div>
        <div className={styles.goalRight}>
          <h2 className={styles.sectionLabel}>The Goal</h2>
          <p>
            The goal was to design a smart packing experience that lets
            travelers{" "}
            <strong>
              create personalized packing lists based on their destination,
              weather, trip duration, planned activities, and number of
              travelers
            </strong>
            , helping them pack more efficiently and confidently by{" "}
            <strong>
              reducing stress, preventing forgotten essentials, and minimizing
              overpacking
            </strong>
            . Success is measured by tracking user satisfaction and task
            completion rates.
          </p>
        </div>
      </section>

      {/* ── 4. USER RESEARCH ─────────────────────────── */}
      <section className={styles.research}>
        <div className={styles.researchLeft}>
          <h2 className={styles.sectionLabel}>
            User research: Summary &amp; Pain Points
          </h2>
          <p>
            To understand how travelers approach packing, I conducted{" "}
            <strong>qualitative user research</strong> through interviews with
            frequent travelers.
          </p>
          <p>
            The goal was to{" "}
            <strong>learn how users plan and manage packing for trips</strong>{" "}
            and what frustrations arise without a dedicated tool.
          </p>
        </div>
        <div className={styles.painCards}>
          <div className={styles.painCard}>
            <h3>Coordination Overload</h3>
            <p>
              Coordinating everyone&apos;s needs and preferences can be
              overwhelming, especially when traveling with family or a group.
            </p>
          </div>
          <div className={styles.painCard}>
            <h3>Overpacking Anxiety</h3>
            <p>
              Fear of forgetting something important leads to overpacking,
              resulting in heavy luggage and unnecessary stress before the trip.
            </p>
          </div>
          <div className={styles.painCard}>
            <h3>Scattered Information</h3>
            <p>
              Packing information is scattered, outdated, or too generic. Not
              tailored to the specific destination, season, or activities
              planned.
            </p>
          </div>
          <div className={styles.painCard}>
            <h3>Regret After Unpacking</h3>
            <p>
              Travelers realize after the trip that some items were unnecessary
              while others were missing, with no way to learn from past trips.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. QUOTE ─────────────────────────────────── */}
      <section className={styles.quoteSection}>
        <blockquote className={styles.quoteText}>
          &ldquo;I always end up overpacking because I&apos;m terrified of
          forgetting something important, especially when traveling with the
          kids.&rdquo;
        </blockquote>
      </section>

      {/* ── 6. PERSONA ───────────────────────────────── */}
      <section className={styles.persona}>
        <div className={styles.personaCard}>
          <div className={styles.personaAvatarPlaceholder} />
          <span className={styles.personaName}>Martina</span>
          <table className={styles.personaMeta}>
            <tbody>
              <tr>
                <td className={styles.metaKey}>AGE</td>
                <td>40</td>
              </tr>
              <tr>
                <td className={styles.metaKey}>EDUCATION</td>
                <td>Master of Education</td>
              </tr>
              <tr>
                <td className={styles.metaKey}>STATUS</td>
                <td>Married, 2 Kids (8 and 11 years old)</td>
              </tr>
              <tr>
                <td className={styles.metaKey}>OCCUPATION</td>
                <td>Teacher</td>
              </tr>
              <tr>
                <td className={styles.metaKey}>LOCATION</td>
                <td>Berlin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.personaDetail}>
          <div className={styles.personaQuoteWrap}>
            <span className={styles.quoteIconOpen}>&ldquo;</span>
            <p className={styles.personaQuoteText}>
              I want to be well prepared for my trip with my family by packing
              everything that&apos;s important and necessary.
            </p>
            <span className={styles.quoteIconClose}>&rdquo;</span>
          </div>

          <h3 className={styles.personaSection}>Brief story</h3>
          <p>
            Martina is a full-time teacher and a busy mother of two who enjoys
            traveling with her family during school holidays. Thanks to her
            extended vacation time, she is able to take several trips each year,
            including longer family vacations.
          </p>
          <p>
            She usually takes the lead in planning every aspect of the trip,
            especially packing. To stay organized, Martina creates detailed
            checklists and spends time researching her destination in advance so
            she knows exactly what her family will need. She wants to feel
            prepared for every situation, from weather changes to family
            activities.
          </p>
          <p>
            Because she often worries about forgetting something important,
            Martina tends to overpack. Packing for herself is one thing, but
            packing for two young children adds another layer of responsibility,
            making the process both time consuming and mentally demanding.
          </p>

          <div className={styles.goalsGrid}>
            <div>
              <h4 className={styles.goalsHeading}>Needs</h4>
              <ul className={styles.goalsList}>
                <li>A personalized packing checklist for the whole family</li>
                <li>
                  Recommendations based on destination, weather, and planned
                  activities
                </li>
                <li>
                  The ability to create separate lists for each family member
                </li>
                <li>Easy organization and last-minute adjustments</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.goalsHeading}>Behavior</h4>
              <ul className={styles.goalsList}>
                <li>Researches destinations and weather before traveling</li>
                <li>Uses notes or handwritten lists to organize packing</li>
                <li>Often double-checks luggage before leaving</li>
                <li>
                  Looks for online packing tips, especially for family travel
                </li>
                <li>Uses voice input when using digital notes</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.goalsHeading}>Goals</h4>
              <ul className={styles.goalsList}>
                <li>Pack efficiently for herself and her family</li>
                <li>Ensure nothing important is forgotten</li>
                <li>Reduce stress before family trips</li>
                <li>Save time when preparing for travel</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.goalsHeading}>Frustrations</h4>
              <ul className={styles.goalsList}>
                <li>Keeping track of what each family member needs</li>
                <li>Worrying about forgetting important items</li>
                <li>Overpacking &ldquo;just in case&rdquo;</li>
                <li>
                  Finding reliable, up-to-date packing advice for different
                  destinations and seasons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. USER JOURNEY MAP ──────────────────────── */}
      <section className={styles.journeySection}>
        <div className={styles.journeyMeta}>
          <h2 className={styles.sectionLabel}>User journey map</h2>
          <p>
            Carry will let users{" "}
            <strong>
              generate smart packing lists and confidently prepare for any trip
            </strong>
            , which will affect frequent travelers and families by{" "}
            <strong>
              reducing packing anxiety, saving time, and ensuring nothing
              important is left behind.
            </strong>
          </p>
        </div>

        <div
          ref={journeyRef}
          className={styles.journeyScroll}
          onMouseDown={onJourneyMouseDown}
          onMouseMove={onJourneyMouseMove}
          onMouseUp={onJourneyMouseUp}
          onMouseLeave={onJourneyMouseUp}
        >
          <table className={styles.journeyTable}>
            <thead>
              <tr>
                <th className={styles.jAction}>ACTION</th>
                <th className={styles.jHeader}>PLAN TRIP</th>
                <th className={styles.jHeader}>RESEARCH</th>
                <th className={styles.jHeader}>
                  CREATE
                  <br />
                  PACKING LIST
                </th>
                <th className={styles.jHeader}>PACK</th>
                <th className={styles.jHeader}>
                  DURING
                  <br />
                  THE TRIP
                </th>
                <th className={styles.jHeader}>
                  AFTER
                  <br />
                  THE TRIP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.jRowLabel}>TASK LIST</td>
                <td className={styles.jTask}>
                  <ol>
                    <li>Search for destination</li>
                    <li>Book trip</li>
                    <li>Plan activities</li>
                  </ol>
                </td>
                <td className={styles.jTask}>
                  <ol>
                    <li>Look for weather forecast</li>
                    <li>Check blogs for packing advice</li>
                    <li>Check local conditions</li>
                  </ol>
                </td>
                <td className={styles.jTask}>
                  <ol>
                    <li>
                      Write down what to pack for each family member
                    </li>
                  </ol>
                </td>
                <td className={styles.jTask}>
                  <ol>
                    <li>
                      Check weather forecast, to see if anything changed
                    </li>
                    <li>Pack stuff</li>
                    <li>Double check</li>
                  </ol>
                </td>
                <td className={styles.jTask}>
                  <ol>
                    <li>
                      Use packed items and adapt to unexpected weather changes
                      or activity
                    </li>
                  </ol>
                </td>
                <td className={styles.jTask}>
                  <ol>
                    <li>Unpack</li>
                    <li>Review what was important or not</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className={styles.jRowLabel}>EMOTIONS</td>
                <td className={styles.jEmotion}>
                  Excited
                  <br />
                  Happy
                  <br />
                  Motivated
                </td>
                <td className={styles.jEmotion}>Curious</td>
                <td className={styles.jEmotion}>Focused</td>
                <td className={styles.jEmotion}>
                  Focused
                  <br />
                  Stressed
                  <br />
                  Uncertain
                </td>
                <td className={styles.jEmotion}>
                  Relieved
                  <br />
                  Reflected
                </td>
                <td className={styles.jEmotion}>
                  Satisfied
                  <br />
                  Thoughtful
                </td>
              </tr>
              <tr>
                <td className={styles.jRowLabel}>OPPORTUNITIES</td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>
                      Offer destination-based planning support and
                      family-specific recommendations
                    </li>
                  </ol>
                </td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>
                      Suggest checklist based on destination, weather and
                      activities
                    </li>
                  </ol>
                </td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>Generate checklist automatically</li>
                  </ol>
                </td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>
                      Provide confidence through smart recommendations and
                      completion tracking
                    </li>
                  </ol>
                </td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>
                      Allow post-trip reflection to improve future packing
                      recommendations
                    </li>
                  </ol>
                </td>
                <td className={styles.jOpportunity}>
                  <ol>
                    <li>
                      Save preferences and learn from past trips for smarter
                      future suggestions
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. LOFI / HIFI ───────────────────────────── */}
      <section className={styles.lofiHifi}>
        <div className={styles.splitBg}>
          <div className={styles.lofiHalf}>
            <h2 className={styles.wireframeLabel}>LoFi</h2>
          </div>
          <div className={styles.hifiHalf}>
            <h2 className={styles.wireframeLabel}>HiFi</h2>
          </div>
        </div>

        <button
          className={styles.arrowLeft}
          onClick={prev}
          disabled={slideIndex === 0}
          aria-label="Previous"
        >
          ←
        </button>

        <div
          className={styles.slideRow}
          onTouchStart={onSlideTouch}
          onTouchEnd={onSlideTouchEnd}
        >
          <div className={styles.lofiContent}>
            <p className={styles.slideDescription}>
              {slides[slideIndex].lofiDescription}
            </p>
            <div className={styles.wireframeImgWrap}>
              <Image
                src={slides[slideIndex].lofi}
                alt={`${slides[slideIndex].label} Lo-Fi wireframe`}
                fill
                style={{ objectFit: "contain", objectPosition: "top center" }}
              />
            </div>
          </div>

          <div className={styles.hifiContent}>
            <div className={styles.wireframeImgWrap}>
              <Image
                src={slides[slideIndex].hifi}
                alt={`${slides[slideIndex].label} Hi-Fi mockup`}
                fill
                style={{ objectFit: "contain", objectPosition: "top center" }}
              />
            </div>
            <p className={styles.slideDescription}>
              {slides[slideIndex].hifiDescription}
            </p>
          </div>
        </div>

        <button
          className={styles.arrowRight}
          onClick={next}
          disabled={slideIndex === slides.length - 1}
          aria-label="Next"
        >
          →
        </button>

        <div className={styles.dotRow}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === slideIndex ? styles.dotActive : ""}`}
              onClick={() => setSlideIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── 9. ACCESSIBILITY ─────────────────────────── */}
      <section className={styles.accessibility}>
        <h2 className={styles.accessLabel}>
          Accessibility
          <br />
          considerations
        </h2>
        <div className={styles.accessCards}>
          <div className={styles.accessCard}>
            <h3>Icon + Label Pairs</h3>
            <p>
              Every item tile uses both an icon and a text label, so users are
              never relying on one alone. This helps users with cognitive
              disabilities or those who process visual and written information
              differently.
            </p>
          </div>
          <div className={styles.accessCard}>
            <h3>Clear Text Hierarchy</h3>
            <p>
              Section headers, item labels, and supporting details each sit at
              a distinct size and weight, making it easy to scan the checklist
              without having to read every line.
            </p>
          </div>
          <div className={styles.accessCard}>
            <h3>Touch Target Size</h3>
            <p>
              Item tiles in the edit screen are large enough to tap
              comfortably, reducing errors for users with limited motor
              precision or those using the app on the go while packing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 10. IMPACT & LEARNINGS ───────────────────── */}
      <section className={styles.impact}>
        <div className={styles.impactRow}>
          <h3 className={styles.infoLabel}>Impact</h3>
          <div className={styles.impactContent}>
            <p>
              The usability studies showed that users felt{" "}
              <strong>significantly more confident</strong> preparing for trips
              when guided by a smart, personalized packing list.
            </p>
            <p>One participant noted,</p>
            <p className={styles.standAloneQuote}>
              &ldquo;For the first time I felt like packing was manageable
              instead of overwhelming, even with the kids.&rdquo;
            </p>
            <p>
              This highlights the impact of context-aware recommendations and
              family-oriented design decisions.
            </p>
          </div>
        </div>
        <div className={styles.impactRow}>
          <h3 className={styles.infoLabel}>What I learned</h3>
          <ul className={styles.bulletList}>
            <li>
              How much the screens changed from Lo-Fi to Hi-Fi, and how
              testing revealed issues that would never have surfaced from
              looking at the design alone.
            </li>
            <li>
              How grounding every design decision in real user feedback, like
              the lost context problem and the buried Add button, led to
              solutions that actually solved the right problems rather than
              assumed ones.
            </li>
          </ul>
        </div>
        <div className={styles.ctaRow}>
          <a
            href="https://www.figma.com/proto/mXMsgA0dVKrqRC43OmeFke/Ideas?node-id=2254-1996&viewport=-3565%2C-723%2C0.18&t=16DCcibwqGqmhJuH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2254%3A1996&show-proto-sidebar=1&page-id=96%3A598"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            VIEW FINAL PROTOTYPE
          </a>
        </div>
      </section>
    </main>
  );
}
