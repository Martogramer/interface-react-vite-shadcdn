import ScrollingGallerySection from "@/components/sections/ScrollingGallerySectionABSOLUT"

export default function HomePageAV() {
  return (
    <div>
      <ScrollingGallerySection
        title="Historias de transformación digital en América Latina"
        images={[
          [
            "https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg",
            "https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg",
            "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg",
          ],
          [
            "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
            "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
            "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
          ],
        ]}
      />
    </div>
  );
}
