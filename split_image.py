import requests
from PIL import Image
from io import BytesIO
import os

# 資料夾路徑
folder_url = "https://github.com/chengchuni/Promise/tree/main/images"

# 圖片檔案列表，假設圖片名稱是 image1.png, image2.png...
image_files = ["wln0319-1-1.jpg", "wln0319-1-2.jpg", "wln0319-2-1.jpg", "wln0319-2-2.jpg", "wln0319-3-1.jpg", "wln0319-3-2.jpg", "wln0319-4-1.jpg", "wln0319-4-2.jpg"]  # 你可以根據需要添加圖片名稱

# 輸出資料夾
output_folder = "output_images"

# 確保輸出資料夾存在
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 處理每張圖片
for img_file in image_files:
    # 拼接完整圖片 URL
    img_url = folder_url + img_file
    print(f"處理圖片: {img_url}")
    
    # 使用 requests 下載圖片
    response = requests.get(img_url)
    img = Image.open(BytesIO(response.content))

    # 這裡可以對圖片進行分割、處理等操作
    # 儲存下載的圖片
    img.save(os.path.join(output_folder, img_file))

    print(f"圖片 {img_file} 已經保存。")

print("所有圖片處理完成。")
