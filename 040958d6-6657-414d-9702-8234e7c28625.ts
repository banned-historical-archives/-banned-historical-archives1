export default {
  "entity": {
    "id": "040958d6-6657-414d-9702-8234e7c28625",
    "name": "张春桥、王效禹三篇讲话（1967.5）",
    "internal": true,
    "official": true,
    "type": "img",
    "author": "张春桥、王效禹，1967.5，山东省委党校红色造反者指挥部《触灵魂》、济南市人委大联合总部市经委红色造反队、济南市财贸系统革命造反总指挥部、济南市革命委员会办公厅、济南市商业一局系统革命造反司令部、天津市五金交电公司无产阶级革命造反派大联合总部、天津人民出版社十·一八革命造反团",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/3.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/4.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/5.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/6.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/7.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/8.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/040958d6-6657-414d-9702-8234e7c28625/9.jpg"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "jpg",
    "articles": [
      {
        "title": "张春桥同志在济南军区的讲话",
        "authors": [
          "张春桥"
        ],
        "page_start": 1,
        "page_end": 2,
        "tags": [
          {
            "name": "山东省委党校红色造反者指挥部《触灵魂》",
            "type": "reprint"
          },
          {
            "name": "济南市人委大联合总部市经委红色造反队",
            "type": "reprint"
          }
        ],
        "dates": [
          {
            "year": 1967,
            "month": 5
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      },
      {
        "title": "王效禹同志讲话",
        "authors": [
          "王效禹"
        ],
        "page_start": 2,
        "page_end": 4,
        "tags": [
          {
            "name": "济南市财贸系统革命造反总指挥部",
            "type": "reprint"
          }
        ],
        "ocr_exceptions": {
          "2": {
            "content_thresholds": [
              0.25,
              0.09,
              0.5,
              0
            ]
          },
          "4": {
            "content_thresholds": [
              0,
              0.09,
              0,
              0.5
            ]
          }
        },
        "dates": [
          {
            "year": 1967,
            "month": 5,
            "day": 29
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      },
      {
        "title": "王效禹同志讲话",
        "authors": [
          "王效禹"
        ],
        "page_start": 4,
        "page_end": 9,
        "tags": [
          {
            "name": "济南市革命委员会办公厅",
            "type": "recorder"
          },
          {
            "name": "济南市商业一局系统革命造反司令部",
            "type": "recorder"
          },
          {
            "name": "天津市五金交电公司无产阶级革命造反派大联合总部",
            "type": "reprint"
          },
          {
            "name": "天津人民出版社十·一八革命造反团翻印",
            "type": "reprint"
          }
        ],
        "dates": [
          {
            "year": 1967,
            "month": 5,
            "day": 28
          }
        ],
        "ocr": {
          "det_limit_side_len": 1496,
          "det_db_box_thresh": 0.3,
          "rec_model_dir": "./paddle/ch_ppocr_mobile_v2.0_rec_infer",
          "det_model_dir": "./paddle/ch_PP-OCRv3_det_infer",
          "drop_score": 0.3
        }
      }
    ],
    "ocr": {
      "content_thresholds": [
        0,
        0.09,
        0,
        0
      ]
    },
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "040958d6-6657-414d-9702-8234e7c28625",
  "resource_type": "book",
  "version": 2
};