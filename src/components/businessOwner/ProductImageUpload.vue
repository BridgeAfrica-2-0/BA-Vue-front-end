// ProductImageUpload.vue
<template>
  <div class="product-media-section">
    <!-- Photos and Video Section -->
    <div class="mb-4">
      <h6 class="mb-2">{{ $t("businessowner.Photos_and_video") }} <span class="text-danger">*</span>
        <b-icon-question-circle class="ml-1 text-muted" v-b-tooltip.hover
          :title="$t('businessowner.Image_upload_help')" />
      </h6>
      <small class="text-muted d-block mb-3">{{ $t("businessowner.Add_up_to_10_photos_and_1_video") }}</small>

      <!-- Empty state / Upload prompt (only show when no images AND no video) -->
      <div v-if="productImages.length === 0 && !hasVideo" class="upload-placeholder p-4 mb-4" @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave" @drop.prevent="onDrop">
        <div class="text-center py-4">
          <p class="mb-3">{{ $t("businessowner.Drag_Drop_or") }}</p>
          <b-button variant="outline-primary" @click="openImageFileDialog()">
            <i class="fa fa-plus mr-1"></i> {{ $t("businessowner.Add_up_to_10_photos_and_1_video") }}
          </b-button>
        </div>
      </div>

      <!-- Image Grid with Separate Slots (when images are present OR video is present) -->
      <div v-if="productImages.length > 0 || hasVideo" class="mb-4">
        <div class="slot-based-layout">
          <!-- Primary Image Slot (only show if there are images) -->
          <div v-if="productImages.length > 0" class="slot primary-slot">
            <div class="image-wrapper">
              <img :src="getImagePreview(productImages[0])" alt="Primary product image" class="product-image">
              <div class="slot-label primary-badge">{{ $t("businessowner.Primary") }}</div>
              <div class="image-actions">
                <b-button variant="danger" size="sm" @click="removeImage(0)" class="action-btn">
                  <i class="fa fa-trash bright-icon"></i>
                </b-button>
              </div>
            </div>
          </div>

          <!-- Video Slot (always show when grid is visible) -->
          <div class="slot video-slot">
            <!-- Video Preview -->
            <div v-if="hasVideo" class="video-preview-container">
              <video class="video-preview" controls>
                <source :src="videoPreview" :type="videoMimeType">
                {{ $t("businessowner.Video_Not_Supported") }}
              </video>
              <div class="slot-label video-badge">{{ $t("businessowner.Video") }}</div>
              <div class="image-actions">
                <b-button variant="danger" size="sm" @click="removeVideo" class="action-btn">
                  <i class="fa fa-trash bright-icon"></i>
                </b-button>
              </div>
            </div>

            <!-- Video Upload Placeholder -->
            <div v-else class="add-video-placeholder" @click="openVideoFileDialog()">
              <i class="fa fa-video-camera fa-2x text-muted"></i>
              <p class="mb-0 mt-2 text-muted small">{{ $t("businessowner.Add_Video") }}</p>
            </div>
          </div>

          <!-- Add Image Button Slot (show when no images exist) -->
          <div v-if="productImages.length === 0" class="slot empty-slot" @click="openImageFileDialog()">
            <div class="add-more-placeholder">
              <i class="fa fa-plus fa-2x text-muted"></i>
              <p class="mb-0 mt-2 text-muted small">{{ $t("businessowner.Add_Image") }}</p>
            </div>
          </div>

          <!-- Additional Image Slots -->
          <template v-for="index in 9">
            <!-- Filled Image Slot -->
            <div v-if="productImages.length > index" :key="'image-' + index" class="slot image-slot">
              <div class="image-wrapper">
                <img :src="getImagePreview(productImages[index])" alt="Product image" class="product-image">
                <div class="image-actions">
                  <b-button variant="danger" size="sm" @click="setAsPrimary(index)" class="action-btn" v-b-tooltip.hover
                    title="Set as primary">
                    <i class="fa fa-star bright-icon"></i>
                  </b-button>
                  <b-button variant="danger" size="sm" @click="removeImage(index)" class="action-btn">
                    <i class="fa fa-trash bright-icon"></i>
                  </b-button>
                </div>
              </div>
            </div>

            <!-- Empty Slot / Add More Button (only show if we have images to maintain the grid) -->
            <div v-else-if="index === productImages.length && productImages.length > 0" :key="'empty-' + index" class="slot empty-slot"
              @click="openImageFileDialog()">
              <div class="add-more-placeholder">
                <i class="fa fa-plus fa-2x text-muted"></i>
                <p class="mb-0 mt-2 text-muted small">{{ $t("businessowner.Add_Image") }}</p>
              </div>
            </div>

            <!-- Future Empty Slots (only show if we have images to maintain the grid) -->
            <div v-else-if="productImages.length > 0" :key="'future-' + index" class="slot future-slot">
              <div class="future-slot-placeholder">
                <i class="fa fa-image fa-2x text-muted opacity-25"></i>
              </div>
            </div>
          </template>
        </div>
        <small v-if="productImages.length > 0" class="text-muted mt-2">{{ $t("businessowner.First_image_will_be_the_cover_image") }}</small>
      </div>

      <!-- Thumbnail Section -->
      <div v-if="productImages.length > 0" class="thumbnail-section mb-4">
        <h6 class="mb-2">{{ $t("businessowner.Thumbnail") }}</h6>
        <p class="text-muted small mb-3">
          {{ $t("businessowner.The_thumbnail_is_cropped_version") }}
        </p>
        <div class="d-flex justify-content-between align-items-start">
          <div class="thumbnail-preview">
            <img v-if="productImages.length > 0" :src="getImagePreview(productImages[0])" alt="Thumbnail preview"
              class="thumbnail-image">
          </div>
          <!-- <b-button variant="outline-secondary" class="ml-3" size="sm">
            <i class="fa fa-arrows-alt mr-1"></i> {{ $t("businessowner.Adjust_thumbnail") }}
          </b-button> -->
        </div>
      </div>
    </div>
    <!-- <input type="file" id="hidden-image-input" multiple accept="image/*" style="display: none;" @change="onFileSelect">
    <input type="file" id="hidden-video-input" accept="video/*" style="display: none;" @change="handleVideoUpload"> -->
    <input type="file" id="hidden-image-input" multiple accept=".jpg,.jpeg,.png,.gif" 
      style="display: none;" @change="onFileSelect">
    <input type="file" id="hidden-video-input" accept=".mp4,.avi,.mov,.wmv,.flv,.webm,.mkv,.m4v"  style="display: none;"
      @change="handleVideoUpload">
      <!-- <input type="file" id="hidden-image-input" multiple 
       accept="image/jpeg,image/jpg,image/png,image/gif,image/bmp,image/webp"
       capture="false"
       style="display: none;" @change="onFileSelect">
<input type="file" id="hidden-video-input" 
       accept="video/mp4,video/webm,video/quicktime"
       capture="false"
       style="display: none;" @change="handleVideoUpload"> -->
       </div>
</template>

<script>
export default {
  name: 'ProductImageUpload',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    videoFile: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      productImages: [],
      isDragging: false,
      videoPreview: null,
      videoFileName: '',
      productVideo: null,
      videoMimeType: ''
    };
  },
  computed: {
    hasVideo() {
      return !!(this.productVideo || this.videoPreview);
    }
  },
  watch: {
    // Watch for changes to the value prop
    value: {
      handler(newValue) {
        console.log("ProductImageUpload: value prop changed:", newValue);
        if (newValue && Array.isArray(newValue)) {
          this.productImages = [...newValue];
          console.log("ProductImageUpload: productImages updated:", this.productImages);
        } else {
          this.productImages = [];
        }
      },
      immediate: true,
      deep: true
    },
    // Watch for changes to the videoFile prop
    videoFile: {
      handler(newVideoFile) {
        console.log("ProductImageUpload: videoFile prop changed:", newVideoFile);
        if (newVideoFile) {
          this.productVideo = newVideoFile;
          this.videoFileName = newVideoFile.name || 'Current video';
          
          // Handle existing video (URL) vs new video (File)
          if (newVideoFile.url) {
            this.videoPreview = newVideoFile.url;
            this.videoMimeType = '';
          } else if (newVideoFile instanceof File) {
            this.videoPreview = URL.createObjectURL(newVideoFile);
            this.videoMimeType = newVideoFile.type;
          } else if (typeof newVideoFile === 'string') {
            this.videoPreview = newVideoFile;
            this.videoMimeType = '';
          } else {
            this.videoPreview = newVideoFile;
            this.videoMimeType = '';
          }
        } else {
          this.productVideo = null;
          this.videoPreview = null;
          this.videoFileName = '';
          this.videoMimeType = '';
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    console.log("ProductImageUpload created with value:", this.value);
    console.log("ProductImageUpload created with videoFile:", this.videoFile);
  },
  mounted() {
    // Add these file inputs to the document directly, outside Vue's control
    // This avoids the $refs issues entirely
    this.imageInput = document.getElementById('hidden-image-input');
    this.videoInput = document.getElementById('hidden-video-input');
  },
  methods: {
    // Use direct DOM methods instead of $refs
    openImageFileDialog() {
      if (this.imageInput) {
        this.imageInput.click();
      }
    },

    openVideoFileDialog() {
      if (this.videoInput) {
        this.videoInput.click();
      }
    },

    onDragOver(e) {
      this.isDragging = true;
    },
    onDragLeave(e) {
      this.isDragging = false;
    },
    onDrop(e) {
      this.isDragging = false;
      const files = e.dataTransfer.files;
      this.processFiles(files);
    },
    onFileSelect(e) {
      const files = e.target.files;
      this.processFiles(files);
    },
    processFiles(files) {
      if (!files || files.length === 0) return;

      // Separate images and videos
      const imageFiles = [];
      const videoFiles = [];
      
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          imageFiles.push(file);
        } else if (file.type.startsWith('video/')) {
          videoFiles.push(file);
        }
      });

      // Process images
      if (imageFiles.length > 0) {
        const availableSlots = 10 - this.productImages.length;
        const imagesToAdd = imageFiles.slice(0, availableSlots);

        if (imagesToAdd.length > 0) {
          this.productImages = [...this.productImages, ...imagesToAdd];
          this.$emit('input', this.productImages);
          this.$emit('images-updated', this.productImages);
        }
      }

      // Process video (only take the first one)
      if (videoFiles.length > 0 && !this.hasVideo) {
        const videoFile = videoFiles[0];
        this.handleVideoFile(videoFile);
      }

      // Reset file input values
      if (this.imageInput) {
        this.imageInput.value = '';
      }
      if (this.videoInput) {
        this.videoInput.value = '';
      }
    },
    getImagePreview(image) {
      console.log("Getting preview for image:", image);
      
      // If it's a File object
      if (image instanceof File) {
        return URL.createObjectURL(image);
      }
      // If it's a string URL
      else if (typeof image === 'string') {
        return image;
      }
      // If it's an object with url property (existing images)
      else if (image && image.url) {
        return image.url;
      }
      // If it's an object with preview property
      else if (image && image.preview) {
        return image.preview;
      }
      // Fallback for toString method
      else if (image && typeof image.toString === 'function') {
        return image.toString();
      }
      
      console.warn("Could not get preview for image:", image);
      return '';
    },
    setAsPrimary(index) {
      if (index === 0 || index >= this.productImages.length) return;

      // Move the selected image to the first position
      const selectedImage = this.productImages[index];
      const newImages = [
        selectedImage,
        ...this.productImages.slice(0, index),
        ...this.productImages.slice(index + 1)
      ];

      this.productImages = newImages;

      // Emit change to parent component
      this.$emit('input', this.productImages);
      this.$emit('images-updated', this.productImages);
    },
    removeImage(index) {
      if (index < 0 || index >= this.productImages.length) return;

      this.productImages.splice(index, 1);

      // Emit change to parent component
      this.$emit('input', this.productImages);
      this.$emit('images-updated', this.productImages);
    },
    handleVideoUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.handleVideoFile(file);

      // Reset video input value
      if (this.videoInput) {
        this.videoInput.value = '';
      }
    },
    handleVideoFile(file) {
      // Check if it's a video file
      if (!file.type.match('video.*')) {
        this.$emit('video-error', 'Please_select_a_video_file');
        return;
      }

      // Check file size (limit to 50MB)
      const maxSize = 50 * 1024 * 1024; // 50MB in bytes
      if (file.size > maxSize) {
        this.$emit('video-error', 'Video_file_too_large');
        return;
      }

      this.productVideo = file;
      this.videoFileName = file.name;
      this.videoMimeType = file.type;
      
      // Create object URL for preview
      if (this.videoPreview && this.videoPreview.startsWith('blob:')) {
        URL.revokeObjectURL(this.videoPreview);
      }
      this.videoPreview = URL.createObjectURL(file);

      // Emit to parent
      this.$emit('video-updated', this.productVideo);
    },
    removeVideo() {
      // Clean up object URL if it exists
      if (this.videoPreview && this.videoPreview.startsWith('blob:')) {
        URL.revokeObjectURL(this.videoPreview);
      }
      
      this.productVideo = null;
      this.videoPreview = null;
      this.videoFileName = "";
      this.videoMimeType = '';

      // Emit to parent
      this.$emit('video-updated', null);
    }
  },
  beforeDestroy() {
    // Clean up object URLs to prevent memory leaks
    if (this.videoPreview && this.videoPreview.startsWith('blob:')) {
      URL.revokeObjectURL(this.videoPreview);
    }
  }
};
</script>

<style scoped>
/* Product Gallery Styling */
.upload-placeholder {
  border: 2px dashed #dee2e6;
  border-radius: 6px;
  background-color: #f8f9fa;
  min-height: 120px;
}

.bright-icon {
  color: #141414;
  /* Bright red color */
  font-size: 1.2em;
  /* Slightly larger */
  text-shadow: 0 0 2px white;
  /* White outline */
}

.action-btn {
  background-color: rgba(248, 245, 246, 0.7);
  /* Semi-transparent background */
}

.action-btn:hover {
  background-color: rgba(255, 250, 251, 0.9);
  /* More solid on hover */
}

/* Slot-based layout styling */
.slot-based-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

.slot {
  position: relative;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.primary-slot {
  border: 2px solid #28a745;
}

.video-slot {
  border: 2px solid #fd7e14;
  background-color: #f8f9fa;
}

.image-slot {
  border: 1px solid #dee2e6;
}

.empty-slot {
  border: 2px dashed #dee2e6;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.2s ease;
}

.empty-slot:hover {
  background-color: #e9ecef;
}

.future-slot {
  border: 1px dashed #e9ecef;
  background-color: #f8f9fa;
  opacity: 0.5;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-preview-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
}

.video-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slot-label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 8px;
  font-size: 0.7rem;
  border-radius: 0 0 4px 0;
  z-index: 5;
}

.primary-badge {
  background: #28a745;
  color: white;
}

.video-badge {
  background: #fd7e14;
  color: white;
}

.image-actions {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.image-wrapper:hover .image-actions,
.video-preview-container:hover .image-actions {
  opacity: 1;
}

.action-btn {
  width: 28px;
  height: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-more-placeholder,
.add-video-placeholder,
.future-slot-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.add-video-placeholder {
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-video-placeholder:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.opacity-25 {
  opacity: 0.25;
}

/* Thumbnail Section Styling */
.thumbnail-section {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.thumbnail-preview {
  width: 120px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Video Styling */
.video-upload-section {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.media-upload-card {
  border: 1px dashed #dee2e6;
  background-color: #f8f9fa;
}

.video-upload-zone {
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 120px;
}

.video-upload-zone:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>