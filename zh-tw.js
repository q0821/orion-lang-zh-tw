i18n.map('zh-TW', {
  global: {
    save: '保存',
    create: '建立',
    logout: '登出',
    back: '後退',
    cancel: '取消',
    delete: '刪除',
    confirm: '確認',
    choose: '選擇',
    noPermission: '您沒有權限',
    passwordNotMatch: '密碼錯誤',
    optional: '非必填'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Emails',
        address: '地址',
        verified: '已認證'
      },
      password: {
        title: '密碼',
        new: '輸入密碼',
        confirm: '確認密碼'
      },
      profile: {
        name: '用戶名'
      }
    },
    index: {
      title: '帳號',
      actions: {
        edit: '編輯',
      },
      tableTitles: {
        name: '用戶名',
        email: 'Email',
        roles: '角色',
        actions: 'Actions'
      }
    },
    update: {
      title: '更新賬戶',
      messages: {
        noPermissions: '您沒有編輯用戶的權限'
      },
      sections: {
        profile: {
          title: '資料'
        },
        roles: {
          title: '角色',
          selectRoles: '選擇用戶角色'
        },
        changePassword: {
          title: '更改密碼'
        },
        deleteUser: {
          title: '危險',
          advice: '刪除用戶會引發問題。 ',
          button: '刪除用戶'
        }
      }
    },
    myAccount: {
      title: '我的帳號',
    },
    create: {
      title: '建立用戶',
      createInvitation: '建立邀請',
      createUserNow: '立即建立用戶',
      inviteOther: '邀請他人',
      selectRoles: '選擇新用戶角色',
      email: 'Email',
      messages: {
        successfullyCreated: '成功建立邀請'
      }
    },
    changePassword: {
      title: '更改密碼',
    },
    updateProfile: {
      title: '更新資料',
    },
    register: {
      title: '註冊',
      registerButton: '註冊',
      fields: {
        email: 'Email',
        name: '用戶名',
        password: '密碼',
        confirmPassword: '確認密碼'
      },
      messages: {
        invalidEmail: '無效的Email',
        invalidInvitationCode: '無效的邀請碼',
      }
    }
  },
  collections: {
    create: {
      title: '建立{$1}'
    },
    update: {
      title: '更新{$1}'
    },
    delete: {
      title: '刪除{$1}',
      confirmQuestion: '確定要刪除{$1}嗎?'
    },
    common: {
      defaultPluralName: '項目',
      defaultSingularName: '項目',
    }
  },
  config: {
    update: {
      title: '配置',
    }
  },
  dictionary: {
    update: {
      title: '字典'
    }
  },
  filesystem: {
    messages: {
      notFound_id: '文件未找到 [{$i}]',
      errorUploading: '上傳文件出錯',
      errorRemoving: '刪除文件出錯',
    }
  },
  pages: {
    schema: {
      title: '標題',
      url: 'Url',
    },
    index: {
      title: '頁面',
    },
    create: {
      title: '建立頁面',
      chooseTemplate: '選擇模板'
    },
    update: {
      title: '更新頁面',
    },
    delete: {
      title: '刪除頁面',
      confirmQuestion: '確定要刪除頁面嗎?'
    }
  },
  attributes: {
    users: {
      pluralName: '用戶',
      singularName: '用戶',
    },
    file: {
      choose: '選擇文件',
      noFile: '沒有文件',
    },
    image: {
      choose: '選擇單張圖片'
    },
    images: {
      choose: '選擇多張圖片'
    }
  },
  tabular: {
    search: '搜尋:',
    info: '列出 _START_ 到 _END_ 總共 _TOTAL_ 個項目',
    infoEmpty: '列出 0 到 0 總共 0 個項目',
    lengthMenu: '列出 _MENU_ 項目',
    emptyTable: '表格中無可用數據',
    paginate: {
      first: '第一頁',
      previous: '上一頁',
      next: '下一頁',
      last: '最後頁',
    }
  }
});