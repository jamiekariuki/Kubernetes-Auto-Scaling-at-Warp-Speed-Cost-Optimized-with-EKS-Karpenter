terraform {
  backend "s3" {
    bucket = "850502433430-bucket-state-file-karpenter"
    region = "us-east-1"
    key    = "karpenter.tfstate"
  }
}
