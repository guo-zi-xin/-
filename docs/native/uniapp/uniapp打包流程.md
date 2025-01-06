# uni-app 打包流程

### 背景

在当前移动应用开发的大环境下，`uni-app` 作为一种使用 ***Vue.js*** 开发多平台应用的框架，为开发者提供了快速构建跨平台应用的能力。

### 准备环境

NodeJs： [NodeJS官网](https://nodejs.org/en)
HBuilderX： [HBuilderX官网](https://www.dcloud.io/hbuilderx.html)
JDK(Java Development Kit): [JDK下载地址](https://www.oracle.com/java/technologies/downloads/)

:::warning
**如果想要实现本地版离线打包， 还需要安装安卓的环境：**

离线打包需要安装以下工具：

Android Studio 下载地址： [Android Studio官网](https://developer.android.google.cn/studio?hl=zh-cn)

App离线SDK下载：[最新平台安卓离线版SDK](https://nativesupport.dcloud.net.cn/AppDocs/download/android.html)

> **非特殊情况下，非专业的安卓开发人员，真的不建议使用离线打包。 不建议离线打包**
:::

### 创建应用

1. 在 HBuilderX 中新建新的uni-app项目或打开已有的项目
2. 输入项目的名称和存放路径，并选择合适的模版
3. 点击“创建”来生成项目文件

![HbuilderX创建项目](/image/uni-app新建项目.png)

### 生成签名证书

生成 Android 平台签名证书（.keystore）是用于对应用进行数字签名以确保应用的安全性和完整性。下面是一个简单的 Android 平台签名证书生成指南：

#### 步骤一： 安装SDK(Java Development Kit)

1. 访问 Oracle 网站， 并下载适合自己的操作系统的JDK安装程序
2. 执行安装程序， 并按照提示进行安装

#### 步骤二: 打开终端或命令提示符

1. Windows上 按下`win`+ `R` 输入 `cmd`, 然后回车键打开命令提示符
2. Mac上， 打开'应用程序'> '实用工具' > '终端' 或者其他安装的终端软件(例如`iTerm2`)

#### 步骤三：导航到 JDK的bin目录

在终端或命令提示符中，使用以下命令导航到你安装的 JDK 的 bin 目录。根据你的 JDK 版本和安装路径可能有所不同，以下命令仅供参考。

```bash
# JDK文件名要看安装的JDK版本
cd C:\Program Files\Java\jdk1.8.0_221\bin  // Windows示例路径
cd /Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home/bin  // Mac示例路径
```

#### 步骤四：生成签名证书

在终端或命令提示符中，使用以下命令生成签名证书（.keystore 文件）。根据你的需求和项目要求，可以根据需要修改命令中的参数。

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-release-key -keyalg RSA -keysize 2048 -validity 10000

# keytool： Java 自带的工具，用于管理密钥和证书。

# -genkey： 表示生成一个新的密钥对。

#-v： 表示启用详细模式（verbose），会输出更多的详细信息。

# -keystore my-release-key.keystore： 
  #指定生成的密钥库文件名为 my-release-key.keystore。 可以自行修改
  # 这是一个存储私钥和公钥的文件。

# -alias my-release-key： 为密钥对指定一个别名，方便之后引用。

# -keyalg RSA：指定密钥的算法为 RSA（加密算法的一种）。

# -keysize 2048： 指定密钥的长度为 2048 位（确保足够的安全性）。

# -validity 10000： 指定证书的有效期为 10,000 天（约 27 年）。
```

#### 步骤五：按照提示填写证书信息

生成签名证书的命令会提示你填写一些证书信息，如证书拥有者的姓名、组织单位名称、城市、州/省、国家等。根据实际情况填写这些信息。

#### 步骤六：设置密码

生成签名证书时，需要设置一个密码以保护证书的安全性。请记住这个密码，它将用于以后对应用进行签名和更新。

#### 步骤七：妥善保存证书文件

确认生成的签名证书 生成签名证书后，会在当前目录下生成一个名为 my-release-key.keystore 的文件。请确保将这个文件妥善保存，并备份好。

生成签名证书后，你就可以使用它对你的 Android 应用进行签名了。在打包应用时，通过引用签名证书，可以验证应用的身份和完整性。

> 请注意，签名证书是非常重要的，请妥善保管好它，并谨慎分享证书文件和相关密码，以免引发安全问题。

### 配置应用
