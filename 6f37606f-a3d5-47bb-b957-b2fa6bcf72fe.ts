export default {
  "entity": {
    "id": "6f37606f-a3d5-47bb-b957-b2fa6bcf72fe",
    "name": "张春桥与华东局革命造反派座谈纪要（1967.2.25）",
    "internal": false,
    "official": false,
    "type": "img",
    "author": "张春桥，1967.2.25，赤卫军上海市大专院校革命委员会一九六七年三月四日，赤卫军复旦大学革命委员会翻印",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/2.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives1/main/6f37606f-a3d5-47bb-b957-b2fa6bcf72fe/3.jpg"
    ]
  },
  "parser_option": {
    "page_limits": [],
    "ext": "jpg",
    "articles": [
      {
        "title": "张春桥与华东局革命造反派座谈纪要",
        "authors": [
          "张春桥"
        ],
        "page_start": 1,
        "page_end": 3,
        "tags": [
          {
            "name": "赤卫军上海市大专院校革命委员会",
            "type": "recorder"
          },
          {
            "name": "赤卫军复旦大学革命委员会",
            "type": "reprint"
          }
        ],
        "ocr_exceptions": {
          "3": {
            "content_thresholds": [
              0,
              0.07,
              0,
              0.5
            ]
          }
        },
        "dates": [
          {
            "year": 1967,
            "month": 2,
            "day": 25
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
        0.07,
        0,
        0
      ]
    },
    "ocr_exceptions": {}
  },
  "parser_id": "automation",
  "path": "6f37606f-a3d5-47bb-b957-b2fa6bcf72fe",
  "resource_type": "book",
  "version": 2
};