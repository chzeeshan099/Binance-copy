"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactQuill = dynamic(
  () => import("react-quill-new"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] rounded-xl border border-slate-200 p-4">
        Loading editor...
      </div>
    ),
  }
);
import "react-quill-new/dist/quill.snow.css";

const DetailData = () => {
  const [editorContent, setEditorContent] = useState("");
  const [savedContent, setSavedContent] = useState("");

  const handleSave = () => {
    setSavedContent(editorContent);

    console.log("Saved Content:", editorContent);
  };

  return (
    <div className="mx-auto p-6">

      {/* =========================
          ADMIN EDITOR
      ========================== */}
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Admin Scholarship Editor
        </h2>

        <div className="border border-gray-200 bg-white">

          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Write your scholarship post here..."
          />

        </div>

        <button
          type="button"
          onClick={handleSave}
          className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Save Post
        </button>
      </section>


      {/* =========================
          USER SIDE PREVIEW
      ========================== */}
      <section className="">

        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          User Side Preview
        </h2>

        {savedContent ? (
          <article
            className="
              ql-editor

              /* H1 */
              [&_h1]:text-2xl
              [&_h1]:font-extrabold
              [&_h1]:text-blue-500
              [&_h1]:my-3

              /* H2 */
              [&_h2]:text-xl
              [&_h2]:font-extrabold
              [&_h2]:text-blue-500
               [&_h2]:my-3

              /* H3 */
              [&_h3]:text-lg
              [&_h3]:font-extrabold
              [&_h3]:text-blue-500
               [&_h3]:my-3

              /* Paragraph */
              [&_p]:text-base

              /* Empty paragraphs = line gaps */
              [&_p:empty]:min-h-[1.5rem]

              /* Lists */
              [&_ul]:my-3
              [&_ol]:my-3

              /* Links */
              [&_a]:text-blue-500
              [&_a]:underline

              /* Strong */
              [&_strong]:font-bold
            "
            dangerouslySetInnerHTML={{
              __html: savedContent,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500">
            Abhi koi post save nahi hui.
          </p>
        )}

      </section>


<div className="my-3">
   <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UKdrcC9vioA"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
  </div>

    </div>
  );
};

export default DetailData;