import requests
from PIL import Image
from io import BytesIO
import os

# 資料夾路徑
folder_url = "https://github.com/chengchuni/JamSpud/tree/main/images/"

# 圖片檔案列表，假設圖片名稱是 image1.png, image2.png...
image_files = ["wln0319-1-1.jpg", "wln0319-1-2.jpg", "wln0319-2-1.jpg", "wln0319-2-2.jpg", "wln0319-3-1.jpg", "wln0319-3-2.jpg", "wln0319-4-1.jpg", "wln0319-4-2.jpg"]  # 你可以根據需要添加圖片名稱

# 輸出資料夾
output_folder = "output_images"

# 確保輸出資料夾存在
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# 圖片分割函數
def split_image(image, tile_width, tile_height):
    img_width, img_height = image.size
    tiles = []

    for i in range(0, img_width, tile_width):
        for j in range(0, img_height, tile_height):
            # 創建每個小塊
            tile = image.crop((i, j, min(i + tile_width, img_width), min(j + tile_height, img_height)))
            tiles.append(tile)
    
    return tiles

# 處理每張圖片
for img_file in image_files:
    # 拼接完整圖片 URL
    img_url = folder_url + img_file
    print(f"處理圖片: {img_url}")
    
    # 使用 requests 下載圖片
    response = requests.get(img_url)
    
    if response.status_code == 200:
        img = Image.open(BytesIO(response.content))

        # 設定每個小塊的大小
        tile_width = 256  # 可根據需要調整
        tile_height = 256  # 可根據需要調整
        
        # 分割圖片
        tiles = split_image(img, tile_width, tile_height)

        # 儲存每個小塊
        for idx, tile in enumerate(tiles):
            tile_file = os.path.join(output_folder, f"{img_file}_tile_{idx+1}.jpg")
            tile.save(tile_file)

        print(f"圖片 {img_file} 已經分割並保存。")
    else:
        print(f"無法下載圖片: {img_url}")

print("所有圖片處理完成。")

