# coding: utf-8
import boto3, sys, os

http_url = 'http://ysubcdn.gl.yeecall.com/'
BUCKET = 'y-subs'
# boto3.set_stream_logger('botocore', level='DEBUG')
dev = boto3.session.Session(profile_name='ysubsuploader')
s3 = dev.resource('s3')
bucket = s3.Bucket(BUCKET)


def move_file():
    client = boto3.client('s3')
    # 这个地方有点儿坑, CopySource里面必须再传入一次Bucket, 否则一直报错 CopyObject operation: Access Denied
    # 文档: http://boto3.readthedocs.io/en/latest/reference/services/s3.html?highlight=copy_object#S3.Client.copy_object
    client.copy_object(Bucket=BUCKET, CopySource={'Bucket': BUCKET, 'Key': 'js-sdk/YeeCallJs-1.0.0.js'}, Key='js-sdk/aa.js')
    # client.delete_object(Bucket="y-subs", Key="js-sdk/aa.js")
    print '===== copy or move success'


# 上传
def upload_img(path, key, content_type):
    try:
        data = open(path, 'rb')
        if content_type is None:
            rs = bucket.put_object(Key=key, Body=data)
        else:
            rs = bucket.put_object(Key=key, Body=data, ContentType=content_type)
        flag = isinstance(rs, object)
        print 'upload success : %s%s' % (http_url, key)
        return flag
    except IOError, e:
        print IOError, e
        return False


# 下载
def download_img(key, path):
    # bucket.download_file('js-sdk/YeeCallJs-1.0.0.js', '~/Download/js-sdk/YeeCallJs-1.0.0.js')
    bucket.download_file(key, path)


def up_js(version):
    path = '/Users/wangluyuan/workspace/yeecallweb/webview/dist/js/YeeCallJs-%s.js' % version
    key = 'js-sdk/YeeCallJs-%s.js' % version
    upload_img(path, key, 'text/javascript')


def up_files(f_path, pre_path):
    if os.path.isdir(f_path):
        list_file = os.listdir(f_path)
        for line in list_file:  # 把目录下的文件都赋值给line这个参数
            p = f_path + '/' + line
            if os.path.isdir(p):
                print 'folder ... '
                up_files(p, pre_path + '/' + line)
            else:
                type = os.path.splitext(line)[1].lower()
                content_type = get_content_type(type)
                # if not line.startwith('.'):
                # 过滤OS中隐藏文件
                upload_img(f_path+'/'+line, pre_path+'/'+line, content_type)
    else:
        # 上传文件
        type = os.path.splitext(f_path)[1].lower()
        content_type = get_content_type(type)
        upload_img(f_path, pre_path, content_type)


def get_content_type(str):
    obj = {
        '.html': 'text/html',
        '.htm': 'text/html',
        '.jsp': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.zip': 'application/zip'
    }
    type = obj[str] if obj.has_key(str) else None
    return type

# 范例: 以下目录不要带末尾的/,否则会在服务器上创建一个空的文件夹
# f_path = '/Users/shaoge/work/webviewYeeCall/app/activitys/test'
# pre_path = 'activity/test'
# delete_object

if __name__ == '__main__':
    # move_file()
    l = len(sys.argv)
    if l < 2:
        print 'Missing parameter'
    elif l == 2 and sys.argv[1] == 'js':
        print 'Missing parameter for JS-SDK'
    elif l == 3 and sys.argv[1] != 'js' and sys.argv[1] != 'aa':
        f_path = sys.argv[1]
        pre_path = sys.argv[2]
        up_files(f_path, pre_path)
    else:
        version = sys.argv[2]
        print 'start upload JS-SDK V %s' % version
        up_js(version)


# 1. 上传JS-SDK: python uploadFiles.py js 1.0.0
# 2. 上传目录: python uploadFiles.py /Users/shaoge/Downloads/tinified webview/images
# 目前已经用过的目录: js-sdk, subsAdmin, webview, activity, authorization

# python uploadFiles.py js 1.0.4
# python uploadFiles.py /Users/shaoge/work/webviewYeeCall/dist/css js-sdk/css
# python uploadFiles.py /Users/shaoge/work/webviewYeeCall/dist/js/android js-sdk/js/android
# python uploadFiles.py /Users/shaoge/work/webviewYeeCall/dist/js/ios js-sdk/js/ios


